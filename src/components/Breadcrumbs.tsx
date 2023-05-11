import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { getPageName } from '../utils';

import Link from './styled/Link';

const Breadcrumbs = () => {
	const { asPath } = useRouter();

	const crumbs = useMemo(
		() =>
			(asPath.split('?')[0] ?? '').split('/').map((p, i, arr) => ({
				label: getPageName(asPath, i),
				href: `/${[p, ...arr.slice(0, i)].join('/')}`
			})),
		[asPath]
	);

	return (
		<nav aria-label="breadcrumb">
			<ul className="-ml-2 flex list-none">
				{crumbs.slice(0, -1).map(c => (
					<li key={c.href} className="flex items-center">
						<Link href={c.href}>{c.label}</Link>
						<p className="p-2 text-blueGray">/</p>
					</li>
				))}
				<li>
					<p className="p-2 uppercase">{crumbs.at(-1)?.label}</p>
				</li>
			</ul>
		</nav>
	);
};

export default Breadcrumbs;
