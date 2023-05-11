import type { HTMLProps } from 'react';
import cls from 'classnames';

import Spinner from './Spinner';

type Props = HTMLProps<HTMLButtonElement> & {
	primary?: boolean;
	loading?: boolean;
};

// TODO: Loading state
const Button = ({ primary, loading, children, className, ...props }: Props) => (
	<button
		{...props}
		className={cls('tw-button', className, {
			'pointer-events-none': loading,
			'tw-button-primary': primary
		})}
	>
		<span className="font-fontin text-[20px] font-bold uppercase leading-[30px] tracking-[2px]">
			{loading && <Spinner size={23} />}
			{children}
		</span>
	</button>
);

export default Button;
