import { useSession } from 'next-auth/react';

import Surface from '~/components/styled/Surface';
import Typography from '~/components/styled/Typography';

import type { ExtendedNextPage } from './_app';

const Home: ExtendedNextPage = () => {
	const { data: session } = useSession();
	return (
		<Surface>
			<Typography>Welcome {session?.user?.name}</Typography>
		</Surface>
	);
};

export default Home;
