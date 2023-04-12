import { createTRPCRouter } from './trpc';
import { authRouter } from './routers/auth';
import { tablesRouter } from './routers/tables';

export const appRouter = createTRPCRouter({
	auth: authRouter,
	tables: tablesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
