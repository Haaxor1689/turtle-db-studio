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
import cls from 'classnames';

import type { TableRequest } from '~/server/api/routers/tables';

import { getTablePrimaryKeys, isNotUndefined } from '../../utils';
import { api } from '../../utils/api';
import TextInput from '../form/TextInput';
import Button from '../styled/Button';

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

				// TODO: Make coercing types better
				const { type } = column.columnDef.meta as DMMF.Field;
				const isNumber = type === 'Float' || type === 'Int';
				const isDate = type === 'DateTime';

				return (
					<div
						className={cls('tw-table-column relative', {
							'bg-orange/20': isDirty
						})}
					>
						<p className="p-2">
							{`${value instanceof Date ? value.toISOString() : value}` ||
								'null'}
						</p>
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
							className={cls('absolute bottom-0 left-0 right-0 top-0 hidden', {
								'text-orange': isDirty
							})}
						/>
					</div>
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
	const parentRef = useRef<HTMLFormElement>(null);
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
			<div className="tw-surface flex items-center gap-3">
				<p className="grow">
					Changes in{' '}
					{Object.values(formState.dirtyFields.rows ?? {})?.length ?? 0} rows
					affecting total{' '}
					{formState.dirtyFields.rows
						?.map(r => Object.keys(r ?? {}).length)
						.reduce((s, n) => s + n) ?? 0}{' '}
					cells
				</p>
				{formState.errors.root && (
					<p className="text-red">{formState.errors.root.message}</p>
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
			</div>
			<form
				id="table-form"
				ref={parentRef}
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
				className="tw-surface z-0 grow basis-[400px] overflow-auto !p-0"
			>
				<table className="min-w-full">
					<thead className="sticky top-0 z-10">
						{tableProps.getHeaderGroups().map(g => (
							<tr className="bg-darkGray" key={g.id}>
								{g.headers.map(h => (
									<th
										key={h.id}
										className="whitespace-nowrap border-b border-r border-gray/60 p-2"
									>
										{h.isPlaceholder
											? null
											: flexRender(h.column.columnDef.header, h.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>

					<tbody style={{ height: rowVirtualizer.getTotalSize() }}>
						<VirtualPadding height={paddingTop} />
						{rowVirtualizer.getVirtualItems().map(r => (
							<tr
								key={r.index}
								className="hover:bg-darkPurple"
								style={{ '--last': rows.length - r.index }}
							>
								{rows[r.index]?.getVisibleCells().map(c => (
									<td
										key={c.id}
										className="relative whitespace-nowrap border-b border-r border-gray/40 hover:after:absolute hover:after:left-0 hover:after:-z-10 hover:after:w-full hover:after:bg-darkPurple"
									>
										{flexRender(c.column.columnDef.cell, c.getContext())}
									</td>
								))}
							</tr>
						))}
						<VirtualPadding height={paddingBottom} />
					</tbody>
				</table>
			</form>
		</>
	);
};

export default Table;
