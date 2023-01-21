import { PrismaClient as WorldDbClient } from '../../../prisma/generated/worldDb';
import { PrismaClient as UserDbClient } from '../../../prisma/generated/userDb';
import { env } from '../../env/server.mjs';

const log = [
	{ emit: 'event', level: 'query' } as const,
	...(env.NODE_ENV === 'development'
		? [{ emit: 'stdout', level: 'warn' } as const]
		: []),
	{ emit: 'stdout', level: 'error' } as const
];

declare global {
	// eslint-disable-next-line no-var
	var worldDb: WorldDbClient<{ log: typeof log }> | undefined;
	// eslint-disable-next-line no-var
	var userDb: UserDbClient<{ log: typeof log }> | undefined;
}

export const worldDb = global.worldDb ?? new WorldDbClient({ log });

export const userDb = global.userDb ?? new UserDbClient({ log });

userDb.$on('query', e => {
	console.log(e);
});

if (env.NODE_ENV !== 'production') {
	global.worldDb = worldDb;
	global.userDb = userDb;
}
