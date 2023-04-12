import { Box } from '@mui/system';
import { type DMMF } from '@prisma/client/runtime';
import type { ColumnDef } from '@tanstack/react-table';
import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useMemo, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import type { TableRequest } from '~/server/api/routers/tables';

import { getTablePrimaryKeys, isNotUndefined } from '../../utils';
import { api } from '../../utils/api';
import TextInput from '../form/TextInput';
import Button from '../styled/Button';
import Surface from '../styled/Surface';
import Typography from '../styled/Typography';

import TableEmpty from './Empty';
import TableError from './Error';
import TableLoading from './Loading';
import VirtualPadding from './VirtualPadding';

type TableData = { rows: Record<string, unknown>[] };

const Table = ({ table, db }: TableRequest) => {
	const utils = api.useContext();

	const query = api.tables.getTableData.useQuery({ table, db });
	const mutation = api.tables.updateTableData.useMutation({
		onSuccess: () => {
			utils.tables.getTableData.invalidate({ table, db });
		}
	});

	// Form
	const {
		handleSubmit,
		register,
		reset,
		getValues,
		getFieldState,
		setError,
		control,
		formState
	} = useForm<TableData>({ defaultValues: { rows: [] } });
	const data = getValues().rows;

	useEffect(() => {
		if (query.isLoading) return;
		reset({ rows: query.data?.rows ?? [] });
	}, [query.isLoading, query.data, reset]);

	// Table
	const columns = useMemo<ColumnDef<unknown>[]>(
		() =>
			(query.data?.model.fields ?? []).map(f => ({
				accessorKey: f.name,
				header: f.name,
				meta: f
			})),
		[query.data?.model]
	);

	const defaultColumn = useMemo<Partial<ColumnDef<unknown>>>(
		() => ({
			cell: ({ row, column }) => {
				const name = `rows.${row.index}.${column.id}` as const;

				// eslint-disable-next-line react-hooks/rules-of-hooks
				const value = useWatch({ control, name });
				const { isDirty } = getFieldState(name);

				const { type } = column.columnDef.meta as DMMF.Field;
				const isNumber = type === 'Float' || type === 'Int';
				const isDate = type === 'DateTime';

				return (
					<Box
						sx={{
							'position': 'relative',
							'background': isDirty ? t => `${t.palette.orange}44` : undefined,
							':hover input, :focus-within input': { display: 'block' }
						}}
					>
						<Typography sx={{ p: 2 }}>
							{`${value instanceof Date ? value.toISOString() : value}` ||
								'null'}
						</Typography>
						<TextInput
							{...register(
								name,
								isNumber
									? { valueAsNumber: true }
									: isDate
									? { valueAsDate: true }
									: undefined
							)}
							type={isNumber ? 'number' : isDate ? 'datetime-local' : undefined}
							sx={{
								display: 'none',
								position: 'absolute',
								color: isDirty ? t => t.palette.orange : undefined,
								top: 0,
								bottom: 0,
								left: 0,
								right: 0
							}}
						/>
					</Box>
				);
			}
		}),
		[register, control, getFieldState]
	);

	const tableProps = useReactTable({
		data,
		columns,
		defaultColumn,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	});
	const { rows } = tableProps.getRowModel();

	// Virtualization
	const parentRef = useRef<HTMLDivElement>(null);
	const rowVirtualizer = useVirtualizer({
		count: rows.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 43,
		overscan: 10
	});

	const paddingTop = rowVirtualizer.getVirtualItems()?.at(0)?.start ?? 0;
	const end = rowVirtualizer.getVirtualItems()?.at(-1)?.end;
	const paddingBottom =
		end !== undefined ? rowVirtualizer.getTotalSize() - end : 0;

	if (query.isLoading) return <TableLoading />;
	if (query.isError) return <TableError error={query.error} />;
	if (!query.data?.rows[0]) return <TableEmpty />;

	return (
		<>
			<Surface
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'row',
					gap: 3
				}}
			>
				<Typography sx={{ flexGrow: 1 }}>
					Changes in{' '}
					{Object.values(formState.dirtyFields.rows ?? {})?.length ?? 0} rows
					affecting total{' '}
					{formState.dirtyFields.rows
						?.map(r => Object.keys(r ?? {}).length)
						.reduce((s, n) => s + n) ?? 0}{' '}
					cells
				</Typography>
				{formState.errors.root && (
					<Typography sx={{ color: 'red' }}>
						{formState.errors.root.message}
					</Typography>
				)}
				<Button
					onClick={() => reset({ rows: query.data?.rows ?? [] })}
					loading={formState.isSubmitting}
				>
					Reset
				</Button>
				<Button
					primary
					type="submit"
					form="table-form"
					loading={formState.isSubmitting}
				>
					Submit
				</Button>
			</Surface>
			<Surface
				id="table-form"
				ref={parentRef}
				component="form"
				onSubmit={handleSubmit(async ({ rows }) => {
					const dirtyFields = formState.dirtyFields.rows ?? [];
					try {
						await mutation.mutateAsync({
							table,
							rows: rows
								.map((r, i) => {
									const dirty = Object.entries(dirtyFields[i] ?? {})
										.filter(([_, v]) => v === true)
										.map(([k]) => k);
									const originalRow = formState.defaultValues?.rows?.[i];

									if (dirty.length <= 0 || !originalRow) return undefined;

									const keys = getTablePrimaryKeys(query.data.model);

									return {
										where: Object.fromEntries(
											keys
												.map(k => [k, originalRow?.[k]])
												.filter(isNotUndefined)
										),
										data: Object.fromEntries(
											Object.entries(r).filter(([k]) => dirty.indexOf(k) >= 0)
										)
									};
								})
								.filter(isNotUndefined)
						});
					} catch (e) {
						setError('root', {
							type: 'custom',
							message:
								e instanceof Error ? e.message : 'Unexpected error occurred'
						});
					}
				})}
				sx={{
					flexBasis: 400,
					flexGrow: 1,
					p: 0,
					overflow: 'auto',
					zIndex: 0
				}}
			>
				<Box
					component="table"
					sx={{
						'minWidth': '100%',
						'height': rowVirtualizer.getTotalSize(),
						'overflow': 'hidden',
						'th': { p: 2 },
						'th, td': {
							position: 'relative',
							borderRight: t => t.shape.border('A0'),
							borderBottom: t => t.shape.border('A0'),
							whiteSpace: 'nowrap'
						},
						'td:hover::after': {
							content: '""',
							position: 'absolute',
							backgroundColor: t => t.palette.darkPurple,
							left: 0,
							top: -5000,
							height: 10000,
							width: '100%',
							zIndex: -1
						}
					}}
				>
					<Box component="thead" sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
						{tableProps.getHeaderGroups().map(g => (
							<Box
								component="tr"
								key={g.id}
								sx={{
									background: t => t.palette.darkGray
								}}
							>
								{g.headers.map(h => (
									<th key={h.id}>
										{h.isPlaceholder
											? null
											: flexRender(h.column.columnDef.header, h.getContext())}
									</th>
								))}
							</Box>
						))}
					</Box>

					<tbody>
						<VirtualPadding height={paddingTop} />
						{rowVirtualizer.getVirtualItems().map(r => (
							<Box
								component="tr"
								key={r.index}
								sx={{ ':hover': { background: t => t.palette.darkPurple } }}
							>
								{rows[r.index]?.getVisibleCells().map(c => (
									<td key={c.id}>
										{flexRender(c.column.columnDef.cell, c.getContext())}
									</td>
								))}
							</Box>
						))}
						<VirtualPadding height={paddingBottom} />
					</tbody>
				</Box>
			</Surface>
		</>
	);
};

export default Table;
