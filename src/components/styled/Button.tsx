import { Box, type BoxProps } from '@mui/system';
import type { HTMLProps } from 'react';

type Props = { primary?: boolean } & HTMLProps<'button'> & BoxProps;

// TODO: Loading state
const Button = ({ primary, children, ...props }: Props) => (
	<Box
		component="button"
		{...props}
		sx={{
			'overflow': 'hidden',
			'position': 'relative',
			'cursor': 'pointer',
			'py': 2,
			'px': 4,
			'backgroundColor': 'darkGray',
			'background': t =>
				primary
					? `${t.palette.darkGreen}80`
					: `${t.shape.gradientOrange('40')}`,
			'border': t => `1px solid ${primary ? '#C8FF0022' : t.palette.darkBrown}`,
			'borderRadius': t => t.shape.borderRadius,
			'::before': {
				content: '""',
				position: 'absolute',
				top: 5,
				bottom: 5,
				left: 18,
				right: 18,
				borderRadius: '50%',
				backgroundColor: t =>
					primary ? t.palette.warmGreen : t.palette.orange,
				opacity: 0.75,
				mixBlendMode: 'hard-light',
				filter: 'blur(25px)'
			},
			'& > span': {
				typography: 'button',
				background: t =>
					primary ? t.shape.gradientYellow() : t.shape.gradientOrange(),
				WebkitBoxDecorationBreak: 'clone',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				textTransform: 'uppercase'
			},
			':hover > span, :focus > span': {
				background: 'white',
				WebkitBackgroundClip: 'text'
			},
			':hover::before, :focus::before': {
				top: 9,
				bottom: 22,
				left: 22,
				right: 22
			},
			':hover::after, :focus::after': {
				content: '""',
				position: 'absolute',
				top: 12,
				bottom: -46,
				left: 12,
				right: 12,
				borderRadius: '50%',
				backgroundColor: primary
					? t => t.palette.warmGreen
					: t => t.palette.orange,
				opacity: 0.75,
				mixBlendMode: 'hard-light',
				filter: 'blur(25px)'
			},
			...(props.sx ?? {})
		}}
	>
		<Box component="span">{children}</Box>
	</Box>
);

export default Button;
