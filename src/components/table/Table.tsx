import { Box } from '@mui/system';
import { type DMMF } from '@prisma/client/runtime';
import type { UseTRPCQueryResult } from '@trpc/react-query/shared';

import Surface from '../styled/Surface';
import Typography from '../styled/Typography';

import TableEmpty from './Empty';
import TableError from './Error';
import TableLoading from './Loading';

type TableResponse = { model: DMMF.Model; rows: Record<string, unknown>[] };

type Props<T extends TableResponse> = UseTRPCQueryResult<T, unknown>;

const Table = <T extends TableResponse>(query: Props<T>) => {
	const columnCount = query.data?.model.fields?.length ?? 0;
	// const rowCount = query.data?.rows.length ?? 0;

	if (query.isLoading) return <TableLoading />;
	if (query.isError) return <TableError error={query.error} />;
	if (!query.data?.rows[0]) return <TableEmpty />;

	return (
		<Surface
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
					gridTemplateColumns: `repeat(${columnCount}, minMax(max-content, auto))`,
					alignContent: 'flex-start'
				}}
			>
				<Box
					sx={{
						'display': 'contents',
						'& > *': { background: t => t.palette.darkGray }
					}}
				>
					{query.data.model.fields.map((col, y) => (
						<Typography key={y}>{col.name}</Typography>
					))}
				</Box>
				{query.data.rows.map((row, x) => (
					<Box
						key={x}
						sx={{
							'display': 'contents',
							':hover > *': { background: t => t.palette.darkPurple }
						}}
					>
						{query.data.model.fields.map((col, y) => (
							<Typography key={y}>{`${row[col.name]}`}</Typography>
						))}
					</Box>
				))}
			</Box>
		</Surface>
	);
};

export default Table;
