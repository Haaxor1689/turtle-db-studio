import type { AppProps, AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { api } from '~/utils/api';
import Layout from '~/components/Layout';

import '~/styles/globals.css';

export type ExtendedPageProps = {
	centered?: boolean;
	rank?: number;
	expandable?: boolean;
};

export type ExtendedNextPage = NextPage & ExtendedPageProps;

type ExtendedAppProps = AppProps & {
	Component: ExtendedNextPage;
};

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps }
}: ExtendedAppProps) => (
	<>
		<Head>
			<title>Turtle WoW Dev</title>
			<meta name="description" content="Generated by create-t3-app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<SessionProvider session={session}>
			<Layout
				centered={Component.centered}
				rank={Component.rank}
				expandable={Component.expandable}
			>
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</Layout>
		</SessionProvider>
	</>
);

export default api.withTRPC(MyApp);
