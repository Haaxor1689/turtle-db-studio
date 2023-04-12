import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { type Session } from 'next-auth';
import type { inferAsyncReturnType } from '@trpc/server';
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';

import { getServerAuthSession } from '~/server/auth';
import {
	turtleDb,
	logonDb,
	turtleDefinitions,
	logonDefinitions
} from '~/server/db';

type CreateContextOptions = {
	session: Session | null;
};

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
const createInnerTRPCContext = (opts: CreateContextOptions) => ({
	session: opts.session,
	turtleDb,
	turtleDefinitions,
	logonDb,
	logonDefinitions
});

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
	// Get the session from the server using the getServerSession wrapper function
	const session = await getServerAuthSession(opts);
	return createInnerTRPCContext({ session });
};

const t = initTRPC
	.context<inferAsyncReturnType<typeof createTRPCContext>>()
	.create({
		transformer: superjson,
		errorFormatter: ({ shape }) => shape
	});

export const createTRPCRouter = t.router;

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
