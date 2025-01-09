import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from './Button.interface';

import styles from './Button.module.css';

function Button({
	className,
	children,
	onClick,
	color = 'linear-gradient(90deg, #99FDFF 0%, #D1B3FF 100%)',
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
			style={{ '--color': color, ...style } as React.CSSProperties}
		>
			<div className={styles.button__background} />
			<div className={styles.button__content}>{children}</div>
		</button>
	);
}

export default Button;
