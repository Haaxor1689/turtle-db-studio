import { useMemo } from 'react';
import { Box, type BoxProps } from '@mui/system';
import NextLink, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type Props = Omit<BoxProps, 'component'> &
	(
		| { button: true; href?: never; noActive?: never }
		| (LinkProps & { noActive?: boolean; button?: false })
	);

const Link = (props: Props) => {
	const { asPath, isReady } = useRouter();
	const isActive = useMemo(
		() =>
			!props.button &&
			!props.noActive &&
			isReady &&
			new URL(asPath, location.href).pathname ===
				(typeof props.href === 'string'
					? new URL(props.href, location.href).pathname
					: props.href.pathname),
		[props.button, props.href, props.noActive, isReady, asPath]
	);
	const { button: _0, noActive: _1, ...componentProps } = props;
	return (
		<Box
			component={props.button ? 'a' : NextLink}
			{...componentProps}
			sx={{
				'p': 2,
				'color': isActive ? 'white' : 'blueGray',
				'opacity': isActive ? 1 : 0.75,
				'textTransform': 'uppercase',
				'textDecoration': 'none',
				'letterSpacing': '0.03em',
				'cursor': 'pointer',
				':hover, :focus': {
					textShadow: '0px 0px 25px #FFFFFF',
					color: 'orange'
				},
				...(props.sx ?? {})
			}}
		/>
	);
};

export default Link;
