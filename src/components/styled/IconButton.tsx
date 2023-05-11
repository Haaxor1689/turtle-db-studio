import type { ReactElement } from 'react';

type Props = {
	title?: string;
	icon?: ReactElement;
	onClick: () => void;
};

const IconButton = ({ title, icon, onClick }: Props) => (
	<button
		title={title}
		onClick={onClick}
		className="cursor-pointer border-0 p-2 hocus:text-orange hocus:shadow-white hocus:drop-shadow-[0px_0px_25px]"
	>
		{icon}
	</button>
);

export default IconButton;
