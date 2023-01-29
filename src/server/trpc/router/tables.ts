import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { AuthRanks } from '../../../types';
import { router, protectedProcedure } from '../trpc';

export const tablesRouter = router({
	getAllDefinitions: protectedProcedure(AuthRanks.User).query(
		async ({ ctx }) => ctx.turtleDefinitions.datamodel.models
	),
	getTableData: protectedProcedure(AuthRanks.User)
		.input(z.string())
		.query(async ({ input, ctx }) => {
			const model = ctx.turtleDefinitions.datamodel.models.find(
				m => m.name === input
			);
			if (!model)
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: `Data model not found for \`turtle.${input}\` table.`
				});
			return {
				model,
				rows: await (ctx.turtleDb[input as never] as any).findMany({
					take: 100
				})
			};
		})
});
