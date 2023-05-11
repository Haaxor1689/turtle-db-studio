import { useState } from 'react';
import { Search } from 'lucide-react';
import { chain } from 'lodash-es';

import TextInput from '~/components/form/TextInput';
import Link from '~/components/styled/Link';
import { AuthRanks } from '~/types';
import type { ExtendedNextPage } from '~/pages/_app';
import Spinner from '~/components/styled/Spinner';
import PageTitle from '~/components/PageTitle';
import { api } from '~/utils/api';

const DbTablesList: ExtendedNextPage = () => {
	const models = api.tables.getAllDefinitions.useQuery();
	const [search, setSearch] = useState('');

	const filtered = (models.data ?? []).filter(
		m => !search || m.name.replace(/_/g, ' ').match(search)
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
			<div className="tw-surface flex grow items-center justify-center">
				<Spinner />
			</div>
		);

	return (
		<>
			<PageTitle>
				<div className="relative w-full max-w-lg">
					<TextInput
						name="search"
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder="Search"
						className="w-full"
					/>
					<div className="absolute bottom-0 right-2 top-0 flex h-full items-center text-blueGray">
						<Search />
					</div>
				</div>
			</PageTitle>
			<div className="tw-surface columns-1 gap-1 md:columns-2 xl:columns-3">
				{!filtered.length ? (
					<h4 className="py-1 text-center" style={{ columnSpan: 'all' }}>
						No tables found
					</h4>
				) : (
					chain(filtered)
						.groupBy(m => m.name.split('_')[0])
						.map((m, key) => (m.length === 1 ? { key: '', m } : { key, m }))
						.groupBy('key')
						.mapValues(v => v.flatMap(u => u.m))
						.map((models, key) => (
							<div key={key} className="mb-1 break-inside-avoid">
								{key && <h3 className="tw-color">{key}</h3>}
								{models.map(m => (
									<Link
										key={m.name}
										href={`tables/${m.name}`}
										className="block text-xl capitalize"
									>
										{m.name.replace(/_/g, ' ')}
									</Link>
								))}
							</div>
						))
						.value()
				)}
			</div>
		</>
	);
};

DbTablesList.rank = AuthRanks.User;

export default DbTablesList;
