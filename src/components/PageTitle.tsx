import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';

import { getPageName } from '../utils';

import Breadcrumbs from './Breadcrumbs';
import Surface from './styled/Surface';
import Typography from './styled/Typography';

const PageTitle = ({ children }: PropsWithChildren) => {
	const { asPath } = useRouter();
	return (
		<Surface
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				justifyContent: 'space-between',
				alignItems: ['flex-start', 'center'],
				gap: [2, 4]
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Breadcrumbs />
				<Typography variant="h2" color sx={{ textTransform: 'capitalize' }}>
					{getPageName(asPath)}
				</Typography>
			</Box>
			{children}
		</Surface>
	);
};

export default PageTitle;
