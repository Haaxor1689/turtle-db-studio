import { Box } from '@mui/system';
import { useState } from 'react';
import { Search } from 'lucide-react';

import TextInput from '../../components/form/TextInput';
import Link from '../../components/styled/Link';
import Surface from '../../components/styled/Surface';
import Typography from '../../components/styled/Typography';
import { AuthRanks } from '../../types';
import { trpc } from '../../utils/trpc';
import type { ExtendedNextPage } from '../_app';

const DbTablesList: ExtendedNextPage = () => {
	const models = trpc.tables.getAllDefinitions.useQuery();
	const [search, setSearch] = useState('');

	const filtered = (models.data ?? []).filter(
		m => !search || m.name.match(search)
	);

	return (
		<Surface
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minMax(270px, 1fr))',
				gap: 4
			}}
		>
			<Box
				sx={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center' }}
			>
				<Box sx={{ position: 'relative', flexBasis: '100%', maxWidth: 500 }}>
					<TextInput
						name="search"
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder="Search"
						sx={{ width: '100%' }}
					/>
					<Box
						sx={{
							position: 'absolute',
							right: 8,
							top: 0,
							bottom: 0,
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							color: t => t.palette.blueGray
						}}
					>
						<Search />
					</Box>
				</Box>
			</Box>
			{!filtered.length ? (
				<Typography
					variant="h4"
					sx={{ gridColumn: '1/-1', textAlign: 'center', py: 4 }}
				>
					No tables found
				</Typography>
			) : (
				filtered.map((m, i) => (
					<Box key={i}>
						<Link
							href={`tables/${m.name}`}
							sx={{ textTransform: 'none', fontSize: '1.2rem' }}
						>
							{m.name}
						</Link>
					</Box>
				))
			)}
		</Surface>
	);
};

DbTablesList.rank = AuthRanks.User;

export default DbTablesList;
