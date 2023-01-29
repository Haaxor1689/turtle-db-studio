import { useRouter } from 'next/router';

import Table from '../../components/table/Table';
import { AuthRanks } from '../../types';
import { trpc } from '../../utils/trpc';
import type { ExtendedNextPage } from '../_app';

const DbTable: ExtendedNextPage = () => {
	const router = useRouter();
	const { table: tName } = router.query;

	const table = trpc.tables.getTableData.useQuery(
		(Array.isArray(tName) ? tName[0] : tName) ?? ''
	);

	return <Table {...table} />;
};

DbTable.rank = AuthRanks.User;
DbTable.expandable = true;

export default DbTable;
