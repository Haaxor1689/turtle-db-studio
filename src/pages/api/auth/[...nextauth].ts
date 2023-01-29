import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';

import { logonDb } from '../../../server/db/client';

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

export default NextAuth(authOptions);
