type Props = { height: number };

const VirtualPadding = ({ height }: Props) =>
	height > 0 ? (
		<tr>
			<td style={{ border: 'none', height: `${height}px` }} />
		</tr>
	) : null;

export default VirtualPadding;
