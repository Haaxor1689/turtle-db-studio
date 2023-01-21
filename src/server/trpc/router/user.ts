import { AuthRanks } from '../../../types';
import { router, protectedProcedure } from '../trpc';

export const userRouter = router({
	getAll: protectedProcedure(AuthRanks.Admin).query(({ ctx }) =>
		ctx.userDb.account.findMany({
			// select: { id: true, username: true, email: true, rank: true }
			// where: { id: 12, username: { contains: 'AD?M' } }
		})
	)
});
