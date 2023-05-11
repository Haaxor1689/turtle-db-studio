import cls from 'classnames';
import { forwardRef, type HTMLProps } from 'react';

const TextInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
	(props, ref) => (
		<input
			ref={ref}
			{...props}
			className={cls(
				'rounded-[1px] border border-gray/40 bg-darkerGray p-2 placeholder:text-gray focus:border-blueGray',
				props.className
			)}
		/>
	)
);

export default TextInput;
