/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type GetServerSidePropsContext } from 'next';
import {
	getServerSession,
	type NextAuthOptions,
	type DefaultSession,
	type User
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { type account } from 'prisma/logonDb';

import { logonDb } from './db';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
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

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
	callbacks: {
		jwt: ({ token, user }) => {
			if (user) {
				return { ...token, ...user };
			}
			return token;
		},
		session: ({ session, token }) => {
			if (session.user) {
				session.user.id = token.id;
				session.user.rank = token.rank;
			}
			return session;
		}
	},
	providers: [
		CredentialsProvider({
			credentials: { username: {}, password: {} },
			authorize: async credentials => {
				const user = await logonDb.account
					.findFirst({
						where: { username: credentials?.username },
						select: {
							id: true,
							username: true,
							email: true,
							rank: true,
							sha_pass_hash: true
						}
					})
					.catch(e => {
						console.error(e);
						throw Error('Unexpected error occured');
					});

				if (!user) throw new Error('Unknown username');
				if (user.sha_pass_hash !== credentials?.password)
					throw new Error('Incorrect password');

				return {
					id: `${user.id}`,
					name: user.username,
					email: user.email,
					rank: user.rank
				};
			}
		})
	]
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
	req: GetServerSidePropsContext['req'];
	res: GetServerSidePropsContext['res'];
}) => getServerSession(ctx.req, ctx.res, authOptions);
