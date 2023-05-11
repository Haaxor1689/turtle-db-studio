import type { ExtendedNextPage } from './_app';

const NotFound: ExtendedNextPage = () => (
	<div className="flex max-w-sm flex-col gap-4 self-center text-center">
		<h2 className="h1 tw-color">404</h2>
		<p>
			Page you are looking for probably does not exist anymore or never existed.
		</p>
	</div>
);

NotFound.centered = true;

export default NotFound;
