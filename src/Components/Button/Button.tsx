import clsx from 'clsx';

import { ButtonProps } from './Button.interface';

import styles from './Button.module.css';

function Button({
	className,
	children,
	onClick,
	style,
	primary,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			type="button"
			onClick={onClick}
			className={clsx(
				styles.button,
				{ [styles.button__primary]: primary },
				className,
			)}
		>
			<div className={styles.button__background} />
			<div className={styles.button__content}>{children}</div>
		</button>
	);
}

export default Button;
