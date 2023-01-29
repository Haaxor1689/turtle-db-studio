import {
	PrismaClient as TurtleDbClient,
	Prisma as TurtleDefs
} from '../../../prisma/generated/turtleDb';
import {
	PrismaClient as LogonDbClient,
	Prisma as LogonDefs
} from '../../../prisma/generated/logonDb';
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
	var turtleDb: TurtleDbClient<{ log: typeof log }> | undefined;
	// eslint-disable-next-line no-var
	var logonDb: LogonDbClient<{ log: typeof log }> | undefined;
}

export const turtleDb = global.turtleDb ?? new TurtleDbClient({ log });
export const turtleDefinitions = TurtleDefs.dmmf;

export const logonDb = global.logonDb ?? new LogonDbClient({ log });
export const logonDefinitions = LogonDefs.dmmf;

logonDb.$on('query', e => {
	console.log(e);
});

if (env.NODE_ENV !== 'production') {
	global.turtleDb = turtleDb;
	global.logonDb = logonDb;
}
