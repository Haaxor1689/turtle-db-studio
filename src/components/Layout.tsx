import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import cls from 'classnames';

import PageBackground from '~/assets/page_background.png';
import logo from '~/assets/logo.svg';
import useAuthGuard from '~/hooks/useAuthGuard';
import useLocalStorage from '~/hooks/useLocalStorage';
import type { ExtendedPageProps } from '~/pages/_app';
import { AuthRanks } from '~/types';
import { din, fontin } from '~/utils/fonts';

import Link from './styled/Link';
import Spinner from './styled/Spinner';
import SvgGradients from './SvgGradients';
import IconButton from './styled/IconButton';

type NavItem = {
	label: string;
	href: string;
};

const useNavItems = (userRank?: number) =>
	useMemo(() => {
		const navItems: NavItem[] = [];
		switch (userRank) {
			case AuthRanks.Admin:
				navItems.push({ label: 'Users', href: '/admin/users' });
			// falls through
			case AuthRanks.User:
				navItems.push({ label: 'Tables', href: '/tables' });
				break;
		}
		return navItems;
	}, [userRank]);

const ContainerMixin = (isExpanded?: boolean): cls.ArgumentArray => [
	'w-full px-3 mx-auto',
	{
		'max-w-full 2xl:px-3': isExpanded,
		'max-w-screen-2xl 2xl:px-0': !isExpanded
	}
];

const Layout = ({
	centered,
	rank,
	expandable,
	children
}: PropsWithChildren<ExtendedPageProps>) => {
	const { data: session, status: sessionStatus } = useSession();
	const navItems = useNavItems(session?.user?.rank);
	const isRedirecting = useAuthGuard(rank);

	const [isExpanded, setExpanded] = useLocalStorage('expanded-mode', false);

	return (
		<div id="tw-root" className={`${fontin.variable} ${din.variable}`}>
			<SvgGradients />
			<header className="tw-surface !sticky top-0 z-50 !p-0">
				<div
					className={cls('flex items-center gap-3 py-3', ...ContainerMixin())}
				>
					<Link
						href="/"
						noActive
						className="mr-3 flex-shrink-0 p-0 leading-[0] opacity-100"
					>
						<Image src={logo} alt="TurtleWoW" />
					</Link>
					<nav className="flex-grow">
						<ul className="-ml-2 flex list-none items-baseline">
							{navItems.map(i => (
								<li key={i.href}>
									<Link href={i.href}>{i.label}</Link>
								</li>
							))}
							<div className="flex-grow" />
							{session ? (
								<>
									<p className="text-blueGray">{session.user?.name}</p>
									<li>
										<Link
											button
											onClick={() => signOut()}
											className="normal-case"
										>
											Logout
										</Link>
									</li>
								</>
							) : (
								<li>
									<Link href="/login" noActive className="normal-case">
										Login
									</Link>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</header>
			<div
				className="relative flex flex-grow bg-cover bg-top bg-no-repeat"
				style={{ backgroundImage: `url(${PageBackground.src})` }}
			>
				<main
					className={cls(
						'flex flex-col gap-4 py-4',
						{ 'justify-center': !!centered || sessionStatus === 'loading' },
						...ContainerMixin(expandable && isExpanded)
					)}
				>
					{sessionStatus === 'loading' || isRedirecting ? (
						<Spinner size={70} className="self-center" />
					) : (
						children
					)}
				</main>
			</div>

			<footer className="tw-surface mt-3">
				<div
					className={cls(
						'flex justify-between gap-4 py-4',
						...ContainerMixin()
					)}
				>
					To make RMJ&apos;s life easier
					{expandable && (
						<IconButton
							title={isExpanded ? 'Page width' : 'Full width'}
							onClick={() => setExpanded(!isExpanded)}
							icon={isExpanded ? <Minimize /> : <Maximize />}
						/>
					)}
				</div>
			</footer>
		</div>
	);
};

export default Layout;
