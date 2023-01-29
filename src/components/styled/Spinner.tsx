import type { SxProps } from '@mui/system';
import { Box, keyframes } from '@mui/system';

import type Theme from '../../utils/theme';

const SpinKeyframes = keyframes`
  to { transform: rotate(360deg); }
`;

type Props = {
	size?: number;
	sx?: SxProps<typeof Theme>;
};

const Spinner = ({ size = 50, sx }: Props) => (
	<Box
		sx={{
			display: 'inline-block',
			width: `${size}px`,
			aspectRatio: '1',
			opacity: 0.75,
			border: t => `${Math.ceil(size * 0.1)}px solid ${t.palette.blueGray}`,
			borderRadius: '50%',
			borderTopColor: 'currentColor',
			animation: `${SpinKeyframes} 1s ease-in-out infinite`,
			...(sx ?? {})
		}}
	/>
);

export default Spinner;
