import { Box } from '@mui/system';
import type { ReactElement } from 'react';

type Props = {
	title?: string;
	icon?: ReactElement;
	onClick: () => void;
};

// TODO: Styling
const IconButton = ({ title, icon, onClick }: Props) => (
	<Box
		component="button"
		title={title}
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
