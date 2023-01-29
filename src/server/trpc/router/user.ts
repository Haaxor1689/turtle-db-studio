import { TRPCError } from '@trpc/server';

import { AuthRanks } from '../../../types';
import { router, protectedProcedure } from '../trpc';

export const userRouter = router({
	getAll: protectedProcedure(AuthRanks.Admin).query(async ({ ctx }) => {
		const model = ctx.logonDefinitions.datamodel.models.find(
			m => m.name === 'account'
		);
		if (!model)
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: 'Data model not found for `logon.account` table.'
			});
		return {
			model,
			rows: await ctx.logonDb.account.findMany({
				// select: { id: true, username: true, email: true, rank: true }
				// where: { id: 12, username: { contains: 'AD?M' } }
			})
		};
	})
});
