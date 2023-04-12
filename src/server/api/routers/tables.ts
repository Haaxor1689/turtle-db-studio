import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { AuthRanks } from '~/types';
import type { TurtleDbNames } from '~/server/db';

import { createTRPCRouter, protectedProcedure } from '../trpc';

const TableRequestSchema = z.object({
	table: z.string(),
	db: z.enum(['turtle', 'logon'])
});
export type TableRequest = z.infer<typeof TableRequestSchema>;

export const tablesRouter = createTRPCRouter({
	getAllDefinitions: protectedProcedure(AuthRanks.User).query(
		async ({ ctx }) => ctx.turtleDefinitions.datamodel.models
	),
	getTableData: protectedProcedure(AuthRanks.User)
		.input(TableRequestSchema)
		.query(async ({ input, ctx }) => {
			const model = ctx[`${input.db}Definitions`].datamodel.models.find(
				m => m.name === input.table
			);
			if (!model)
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: `Data model not found for \`${input.table}\` table.`
				});
			return {
				model,
				// FIXME: Types
				rows: await (ctx as any)[`${input.db}Db`][
					input.table as TurtleDbNames
				].findMany({ take: 1000 })
			};
		}),
	updateTableData: protectedProcedure(AuthRanks.Admin)
		.input(
			z.object({
				table: z.string(),
				rows: z.array(
					z.object({
						where: z.record(z.unknown()),
						data: z.record(z.unknown())
					})
				)
			})
		)
		.mutation(async ({ input, ctx }) => {
			await ctx.turtleDb.$transaction(
				input.rows.map(({ where, data }) =>
					// FIXME: Types
					(ctx as any).turtleDb[input.table as TurtleDbNames].update({
						where,
						data
					})
				)
			);
		})
});
