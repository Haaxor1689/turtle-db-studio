import Surface from '../styled/Surface';
import Typography from '../styled/Typography';

const TableEmpty = () => (
	<Surface
		sx={{
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center'
		}}
	>
		<Typography variant="h3" color>
			No data
		</Typography>
		<Typography>Current query returned no rows</Typography>
	</Surface>
);

export default TableEmpty;
