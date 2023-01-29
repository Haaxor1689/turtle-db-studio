import Table from '../../components/table/Table';
import { AuthRanks } from '../../types';
import { trpc } from '../../utils/trpc';
import type { ExtendedNextPage } from '../_app';

const Users: ExtendedNextPage = () => {
	const users = trpc.user.getAll.useQuery();

	return <Table {...users} />;
};

Users.rank = AuthRanks.Admin;
Users.expandable = true;

export default Users;
