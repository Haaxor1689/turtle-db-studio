import type { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { AuthRanks } from '../types';

const useAuthGuard = (rank: User['rank'] = AuthRanks.Public) => {
	const { data: session, status } = useSession();
	const { asPath, push, query } = useRouter();
	return useMemo(() => {
		if (status === 'loading') return;

		if (rank === AuthRanks.Login && session?.user) {
			push(typeof query?.from === 'string' ? query?.from : '/');
			return true;
		}

		const path = asPath.split('?')[0] ?? '';
		const userRank = session?.user?.rank ?? -1;
		if (userRank < rank) {
			push({ pathname: '/login', query: { from: path } });
			return true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [asPath, status]);
};

export default useAuthGuard;
