import { createHash } from 'crypto';

import { env } from '~/env.mjs';
import {
	PrismaClient as TurtleDbClient,
	Prisma as TurtleDefs
} from '~/../prisma/turtleDb';
import {
	PrismaClient as LogonDbClient,
	Prisma as LogonDefs
} from '~/../prisma/logonDb';
import { formatDate } from '~/utils';

import { pushSQLFile } from './github';

const globalForPrisma = globalThis as unknown as {
	turtleDb: TurtleDbClient<{ log: typeof log }>;
	logonDb: LogonDbClient<{ log: typeof log }>;
};

const log = [
	{ emit: 'event', level: 'query' } as const,
	...(env.NODE_ENV === 'development'
		? [{ emit: 'stdout', level: 'warn' } as const]
		: []),
	{ emit: 'stdout', level: 'error' } as const
];

export const turtleDb = globalForPrisma.turtleDb ?? new TurtleDbClient({ log });
export const turtleDefinitions = TurtleDefs.dmmf;

export const logonDb = globalForPrisma.logonDb ?? new LogonDbClient({ log });
export const logonDefinitions = LogonDefs.dmmf;

type FilteredKeys<T, U> = {
	[P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export type TurtleDbNames = FilteredKeys<
	typeof turtleDb,
	{ findMany: unknown }
>;

!globalForPrisma.turtleDb &&
	turtleDb.$on('query', async e => {
		if (
			!e.query.startsWith('UPDATE') ||
			e.query.indexOf('`turtle`.`migrations`') > 0
		)
			return;

		const params = (JSON.parse(e.params) as []).map(p =>
			typeof p === 'string' ? `'${(p as string).replaceAll(/'/g, "''")}'` : p
		);

		const query = e.query
			.split('?')
			.reduce((qs, next, idx) =>
				idx === 0 ? qs : `${qs}${params[idx - 1]}${next}`
			);

		const date = new Date();
		const name = `${formatDate(date)}_database`;

		await pushSQLFile(name, query);
		await turtleDb.migrations.create({
			data: {
				Name: name,
				Hash: createHash('sha1').update(query).digest('hex').toUpperCase(),
				AppliedAt: date
			}
		});
	});

if (env.NODE_ENV !== 'production') {
	globalForPrisma.turtleDb = turtleDb;
	globalForPrisma.logonDb = logonDb;
}
