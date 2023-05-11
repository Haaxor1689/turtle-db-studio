import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

import { getPageName } from '../utils';

import Breadcrumbs from './Breadcrumbs';

const PageTitle = ({ children }: PropsWithChildren) => {
	const { asPath } = useRouter();
	return (
		<div className="tw-surface flex flex-col items-start justify-between gap-2 md:flex-row md:items-center md:gap-4">
			<div className="flex flex-col">
				<Breadcrumbs />
				<h2 className="tw-color capitalize">{getPageName(asPath)}</h2>
			</div>
			{children}
		</div>
	);
};

export default PageTitle;
