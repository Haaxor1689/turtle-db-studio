import { useRouter } from 'next/router';

import PageTitle from '~/components/PageTitle';
import Table from '~/components/table/Table';
import { AuthRanks } from '~/types';
import type { ExtendedNextPage } from '~/pages/_app';

const DbTable: ExtendedNextPage = () => {
	const router = useRouter();
	const { table } = router.query;

	if (Array.isArray(table) || !table) return null;

	return (
		<>
			<PageTitle />
			<Table table={table} db="turtle" />
		</>
	);
};

DbTable.rank = AuthRanks.User;
DbTable.expandable = true;

export default DbTable;
