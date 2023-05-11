type Props = {
	error: unknown;
};

const TableError = ({ error }: Props) => (
	<div className="tw-surface flex grow items-center justify-center">
		{JSON.stringify(error)}
	</div>
);

export default TableError;
