import { Box } from '@mui/system';
import type { ReactElement } from 'react';

type Props = {
	icon?: ReactElement;
	onClick: () => void;
};

// TODO: Styling
const IconButton = ({ icon, onClick }: Props) => (
	<Box
		component="button"
		onClick={onClick}
		sx={{
			background: 'none',
			border: 'none',
			cursor: 'pointer',
			p: 2
		}}
	>
		{icon}
	</Box>
);

export default IconButton;
