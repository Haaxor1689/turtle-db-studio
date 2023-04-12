import type { DMMF } from '@prisma/client/runtime';

export const isNotUndefined = <T extends unknown | undefined>(
	obj: T
): obj is Exclude<T, undefined> => obj !== undefined;

export const getPageName = (path: string, idx = -1) =>
	// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
	path.split('?')[0]?.split('/').at(idx)?.replace(/[-_]/g, ' ') || 'Home';

const padZero = (num: number) => num.toString().padStart(2, '0');

export const getTablePrimaryKeys = (m: DMMF.Model) =>
	m.primaryKey?.fields ?? m.fields.filter(c => c.isId).map(c => c.name);

export const formatDate = (date: Date) =>
	date.getFullYear().toString() +
	padZero(date.getMonth() + 1) +
	padZero(date.getDate()) +
	padZero(date.getHours()) +
	padZero(date.getMinutes()) +
	padZero(date.getSeconds());
