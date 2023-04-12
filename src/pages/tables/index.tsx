import { Box } from '@mui/system';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { chain } from 'lodash-es';

import TextInput from '~/components/form/TextInput';
import Link from '~/components/styled/Link';
import Surface from '~/components/styled/Surface';
import Typography from '~/components/styled/Typography';
import { AuthRanks } from '~/types';
import type { ExtendedNextPage } from '~/pages/_app';
import Spinner from '~/components/styled/Spinner';
import PageTitle from '~/components/PageTitle';
import { api } from '~/utils/api';

const DbTablesList: ExtendedNextPage = () => {
	const models = api.tables.getAllDefinitions.useQuery();
	const [search, setSearch] = useState('');

	const filtered = (models.data ?? []).filter(
		m => !search || m.name.match(search)
	);

	console.log(
		chain(filtered)
			.groupBy(m => m.name.split('_')[0])
			.map((m, key) => (m.length === 1 ? { key: 'Other', m } : { key, m }))
			.groupBy('key')
			.mapValues(v => v.flatMap(u => u.m))
			.value()
	);

	if (models.isLoading)
		return (
			<Surface
				sx={{
					flexGrow: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Spinner />
			</Surface>
		);

	return (
		<>
			<PageTitle>
				<Box sx={{ position: 'relative', width: '100%', maxWidth: 500 }}>
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
			</PageTitle>
			<Surface
				sx={{
					columnCount: [1, 2, null, 3],
					gap: 4
				}}
			>
				{!filtered.length ? (
					<Typography
						variant="h4"
						sx={{ columnSpan: 'all', textAlign: 'center', py: 4 }}
					>
						No tables found
					</Typography>
				) : (
					chain(filtered)
						.groupBy(m => m.name.split('_')[0])
						.map((m, key) => (m.length === 1 ? { key: '', m } : { key, m }))
						.groupBy('key')
						.mapValues(v => v.flatMap(u => u.m))
						.map((models, key) => (
							<Box key={key} sx={{ breakInside: 'avoid', mb: 4 }}>
								{key && (
									<Typography variant="h3" color>
										{key}
									</Typography>
								)}
								{models.map(m => (
									<Link
										key={m.name}
										href={`tables/${m.name}`}
										sx={{
											display: 'block',
											textTransform: 'capitalize',
											fontSize: '1.2rem'
										}}
									>
										{m.name.replace(/_/g, ' ')}
									</Link>
								))}
							</Box>
						))
						.value()
				)}
			</Surface>
		</>
	);
};

DbTablesList.rank = AuthRanks.User;

export default DbTablesList;
