import { Box, type BoxProps } from '@mui/system';
import { forwardRef, type HTMLProps } from 'react';

const TextInput = forwardRef<HTMLInputElement, HTMLProps<'input'> & BoxProps>(
	(props, ref) => (
		<Box
			component="input"
			ref={ref}
			{...props}
			sx={{
				'color': 'white',
				'backgroundColor': 'darkerGray',
				'border': t => t.shape.border(),
				'borderRadius': t => t.shape.borderRadius,
				'p': 2,
				':focus': {
					border: t => t.shape.border('A0')
				},
				'::placeholder': {
					color: 'gray'
				},
				...(props.sx ?? {})
			}}
		/>
	)
);

export default TextInput;
