export const getPageName = (path: string, idx = -1) =>
	// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
	path.split('?')[0]?.split('/').at(idx)?.replace('-', ' ') || 'Home';
