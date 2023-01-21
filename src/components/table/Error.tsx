import Surface from '../styled/Surface';

type Props = {
	error: unknown;
};

const TableError = ({ error }: Props) => (
	<Surface
		sx={{
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}
	>
		{JSON.stringify(error)}
	</Surface>
);

export default TableError;
