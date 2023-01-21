/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type DefaultSession, type User } from 'next-auth';

import type { account } from '../../prisma/generated/userDb';

declare module 'next-auth' {
	interface User extends Pick<account, 'rank'> {}

	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user?: DefaultSession['user'] & User;
	}
}

declare module 'next-auth/jwt' {
	interface JWT extends User {}
}
