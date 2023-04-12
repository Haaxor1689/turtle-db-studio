import { Box } from '@mui/system';

import Typography from '~/components/styled/Typography';

import type { ExtendedNextPage } from './_app';

const NotFound: ExtendedNextPage = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: 4,
			textAlign: 'center',
			maxWidth: 300,
			alignSelf: 'center'
		}}
	>
		<Typography component="h2" variant="h1" color>
			404
		</Typography>
		<Typography>
			Page you are looking for probably does not exist anymore or never existed.
		</Typography>
	</Box>
);

NotFound.centered = true;

export default NotFound;
