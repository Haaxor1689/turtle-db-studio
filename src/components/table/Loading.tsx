import Spinner from '../styled/Spinner';
import Surface from '../styled/Surface';

const TableLoading = () => (
	<Surface
		sx={{
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}
	>
		<Spinner />
	</Surface>
);

export default TableLoading;
