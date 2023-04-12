import PageTitle from '~/components/PageTitle';
import Table from '~/components/table/Table';
import { AuthRanks } from '~/types';
import type { ExtendedNextPage } from '~/pages/_app';

const Users: ExtendedNextPage = () => (
	<>
		<PageTitle />
		<Table table="account" db="logon" />
	</>
);

Users.rank = AuthRanks.Admin;
Users.expandable = true;

export default Users;
