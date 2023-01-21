import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { getPageName } from '../utils';

import Link from './styled/Link';
import Typography from './styled/Typography';

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
		<Box component="nav" aria-label="breadcrumb">
			<Box
				component="ul"
				sx={{ display: 'flex', listStyleType: 'none', ml: -2 }}
			>
				{crumbs.slice(0, -1).map(c => (
					<Box
						component="li"
						key={c.href}
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						<Link href={c.href}>{c.label}</Link>
						<Typography sx={{ color: 'blueGray', p: 2 }}>/</Typography>
					</Box>
				))}
				<li>
					<Typography sx={{ p: 2, textTransform: 'uppercase' }}>
						{crumbs.at(-1)?.label}
					</Typography>
				</li>
			</Box>
		</Box>
	);
};

export default Breadcrumbs;
