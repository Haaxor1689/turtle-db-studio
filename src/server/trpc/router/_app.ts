import { router } from '../trpc';

import { authRouter } from './auth';
import { tablesRouter } from './tables';
import { userRouter } from './user';

export const appRouter = router({
	auth: authRouter,
	tables: tablesRouter,
	user: userRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
