import { useSession } from 'next-auth/react';

import type { ExtendedNextPage } from './_app';

const Home: ExtendedNextPage = () => {
	const { data: session } = useSession();
	return (
		<div className="tw-surface">
			<p>Welcome {session?.user?.name}</p>
		</div>
	);
};

export default Home;
