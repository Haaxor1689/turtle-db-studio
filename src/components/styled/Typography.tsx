import { Box, type BoxProps } from '@mui/system';

import type { TypographyVariants } from '../../utils/theme';

const variantToComponent = (variant: TypographyVariants) => {
	switch (variant) {
		case 'l1':
		case 'l2':
		case 's1':
			return 'p';
		default:
			return variant;
	}
};

type Props = Omit<BoxProps, 'color'> & {
	variant?: TypographyVariants;
	color?: boolean;
};

const Inner = ({
	variant = 'p',
	component = variantToComponent(variant),
	color,
	children,
	...props
}: Props) => (
	<Box
		component={component}
		{...props}
		sx={{
			typography: variant,
			...(color
				? {
						display: 'inline',
						background: t => t.shape.gradientOrange(),
						WebkitBoxDecorationBreak: 'clone',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent'
				  }
				: {}),
			display: (props.sx as { textAlign: string })?.textAlign
				? 'block'
				: undefined,
			...(props.sx ?? {})
		}}
	>
		{children}
	</Box>
);

const Typography = ({ color, ...props }: Props) =>
	color ? (
		// Wrapper box to make multiline text gradient work in flex containers
		<Box component={props.component === 'span' ? 'span' : undefined}>
			<Inner color={color} {...props} />
		</Box>
	) : (
		<Inner color={color} {...props} />
	);

export default Typography;
