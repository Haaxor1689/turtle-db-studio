import { Box, type BoxProps } from '@mui/system';
import { forwardRef } from 'react';

const Surface = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
	<Box
		ref={ref}
		{...props}
		sx={{
			position: 'relative',
			backgroundColor: '#191514',
			boxShadow: 'rgb(0 0 0 / 45%) 0px 25px 20px -20px',
			border: t => t.shape.border(),
			p: 4,
			...(props.sx ?? {})
		}}
	/>
));

export default Surface;
