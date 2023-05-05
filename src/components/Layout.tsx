import Image from 'next/image';
import type { SxProps } from '@mui/system';
import { Box } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { Maximize, Minimize } from 'lucide-react';

import logo from '../assets/logo.svg';
import { type ThemeT } from '../utils/theme';
import PageBackground from '../assets/page_background.png';
import useAuthGuard from '../hooks/useAuthGuard';
import useLocalStorage from '../hooks/useLocalStorage';
import type { ExtendedPageProps } from '../pages/_app';
import { AuthRanks } from '../types';

import Link from './styled/Link';
import Typography from './styled/Typography';
import Surface from './styled/Surface';
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

const ContainerMixin = (isExpanded?: boolean): SxProps<ThemeT> => ({
	width: '100%',
	maxWidth: isExpanded ? '100%' : 'lg',
	mx: 'auto',
	px: [3, null, null, isExpanded ? 3 : 0]
});

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
		<>
			<SvgGradients />
			<Surface
				component="header"
				sx={{
					position: 'sticky',
					top: 0,
					zIndex: 'header',
					p: 0
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 3,
						py: 3,
						...ContainerMixin()
					}}
				>
					<Link
						href="/"
						noActive
						sx={{ opacity: 1, lineHeight: 0, p: 0, mr: 3 }}
					>
						<Image src={logo} alt="TurtleWoW" />
					</Link>
					<Box component="nav" sx={{ flexGrow: 1 }}>
						<Box
							component="ul"
							sx={{ display: 'flex', listStyleType: 'none', ml: -2 }}
						>
							{navItems.map(i => (
								<li key={i.href}>
									<Link href={i.href}>{i.label}</Link>
								</li>
							))}
							<Box flexGrow={1} />
							{session ? (
								<>
									<Typography sx={{ color: 'blueGray' }}>
										{session.user?.name}
									</Typography>
									<li>
										<Link
											button
											onClick={() => signOut()}
											sx={{ textTransform: 'none' }}
										>
											Logout
										</Link>
									</li>
								</>
							) : (
								<li>
									<Link href="/login" noActive sx={{ textTransform: 'none' }}>
										Login
									</Link>
								</li>
							)}
						</Box>
					</Box>
				</Box>
			</Surface>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					flexGrow: 1,
					backgroundImage: `url(${PageBackground.src})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top',
					backgroundSize: 'cover'
				}}
			>
				<Box
					component="main"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent:
							centered || sessionStatus === 'loading' ? 'center' : undefined,
						gap: 4,
						py: 4,
						...ContainerMixin(expandable && isExpanded)
					}}
				>
					{sessionStatus === 'loading' || isRedirecting ? (
						<Spinner size={70} sx={{ alignSelf: 'center' }} />
					) : (
						children
					)}
				</Box>
			</Box>

			<Surface component="footer" sx={{ mt: 3 }}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: 4,
						py: 4,
						...ContainerMixin()
					}}
				>
					To make RMJ&apos;s life easier
					{expandable && (
						<IconButton
							title={isExpanded ? 'Page width' : 'Full width'}
							onClick={() => setExpanded(!isExpanded)}
							icon={isExpanded ? <Minimize /> : <Maximize />}
						/>
					)}
				</Box>
			</Surface>
		</>
	);
};

export default Layout;
