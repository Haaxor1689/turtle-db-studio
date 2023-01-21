import { Box } from '@mui/system';
import { useVirtualizer, useWindowVirtualizer } from '@tanstack/react-virtual';
import type { UseTRPCQueryResult } from '@trpc/react-query/shared';
import { useLayoutEffect, useRef } from 'react';

import Surface from '../styled/Surface';
import Typography from '../styled/Typography';

import TableEmpty from './Empty';
import TableError from './Error';
import TableLoading from './Loading';

type Props<T extends Record<string, unknown>[]> = UseTRPCQueryResult<
	T,
	unknown
>;

const Table = <T extends Record<string, unknown>[]>(query: Props<T>) => {
	const columnCount = Object.keys(query.data?.[0] ?? {}).length;
	const rowCount = (query.data?.length ?? 0) + 1;

	const parentRef = useRef<HTMLDivElement | null>(null);
	const parentOffsetRef = useRef(0);

	useLayoutEffect(() => {
		parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
	}, []);

	const virtualizer = useWindowVirtualizer({
		count: rowCount,
		estimateSize: () => 43,
		overscan: 5,
		scrollMargin: parentOffsetRef.current
	});

	const columnVirtualizer = useVirtualizer({
		horizontal: true,
		count: columnCount,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 200,
		overscan: 5
	});
	const columnItems = columnVirtualizer.getVirtualItems();
	const [before, after] = [
		columnItems.at(0)?.start ?? 0,
		columnVirtualizer.getTotalSize() - (columnItems.at(-1)?.end ?? 0)
	];

	if (query.isLoading) return <TableLoading />;
	if (query.isError) return <TableError error={query.error} />;
	if (!query.data[0]) return <TableEmpty />;

	return (
		<Surface
			ref={parentRef}
			sx={{
				'flexGrow': 1,
				'p': 0,
				'overflow': 'auto',
				'> * > * > *': {
					p: 2,
					borderRight: t => t.shape.border('A0'),
					borderBottom: t => t.shape.border('A0')
				}
			}}
		>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: `auto repeat(${columnCount}, minMax(max-content, auto)) auto`,
					alignContent: 'flex-start',
					height: virtualizer.getTotalSize(),
					position: 'relative'
				}}
			>
				{virtualizer.getVirtualItems().map(row => (
					<Box
						key={row.key}
						sx={{
							'position': 'absolute',
							'top': 0,
							'left': 0,
							'transform': `translateY(${
								row.start - virtualizer.options.scrollMargin
							}px)`,
							'display': 'contents',
							'background': t =>
								row.index === 0 ? t.palette.darkGray : undefined,
							':hover > *': {
								background: t => t.palette.darkPurple
							}
						}}
					>
						<Box sx={{ width: `${before}px`, p: 0, borderWidth: 0 }} />
						{columnItems.map(col => {
							const v =
								row.index === 0
									? Object.keys(query.data?.[0] ?? {})[col.index]
									: Object.values(query.data[row.index - 1] ?? {})[col.index];
							return (
								<Box
									key={col.key}
									ref={columnVirtualizer.measureElement}
									data-index={col.index}
								>
									<Typography>{`${v}`}</Typography>
								</Box>
							);
						})}
						<Box sx={{ width: `${after}px`, p: 0, borderWidth: 0 }} />
					</Box>
				))}
			</Box>
		</Surface>
	);
};

export default Table;
