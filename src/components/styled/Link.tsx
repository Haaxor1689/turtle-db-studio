import { type HTMLProps, useMemo, type ButtonHTMLAttributes } from 'react';
import NextLink, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cls from 'classnames';

type Props =
	| ({
			button: true;
			noActive?: never;
			href?: never;
	  } & ButtonHTMLAttributes<HTMLButtonElement>)
	| ({ button?: false; noActive?: boolean } & LinkProps &
			Omit<HTMLProps<HTMLAnchorElement>, keyof LinkProps | 'ref'>);

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
		[props.button, props.noActive, props.href, isReady, asPath]
	);

	const classes = cls(
		'p-2 uppercase no-underline tracking-[0.03em] cursor-pointer hocus:text-orange hocus:shadow-white hocus:drop-shadow-[0px_0px_25px]',
		{ 'text-white': isActive, 'text-blueGray opacity-75': !isActive },
		props.className
	);

	if (!props.button) return <NextLink {...props} className={classes} />;

	return (
		<button {...props} className={classes}>
			{props.children}
		</button>
	);
};

export default Link;
