import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';

import { type Context } from './context';

const t = initTRPC.context<Context>().create({
	transformer: superjson,
	errorFormatter: ({ shape }) => shape
});

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = (rank = 0) =>
	t.procedure.use(
		t.middleware(({ ctx, next }) => {
			if (!ctx.session?.user) {
				throw new TRPCError({ code: 'UNAUTHORIZED' });
			}
			if (ctx.session.user.rank < rank) {
				throw new TRPCError({
					code: 'UNAUTHORIZED',
					message: 'User rank not high enough.'
				});
			}
			return next({
				// infers the `session` as non-nullable
				ctx: { session: { ...ctx.session, user: ctx.session.user } }
			});
		})
	);
