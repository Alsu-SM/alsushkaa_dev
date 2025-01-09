import clsx from 'clsx';
import { TimerAnimationProps } from './types';

import styles from './TimerAnimation.module.css';
import useTimerAnimation from './useTimerAnimation';

function TimerAnimation({
	maxSeconds,
	currentSeconds,
	className,
	style,
}: TimerAnimationProps) {
	const { ref } = useTimerAnimation({ maxSeconds, currentSeconds });

	return (
		<canvas
			className={clsx(styles.root, className)}
			style={style}
			ref={ref}
			width={100}
			height={100}
		/>
	);
}

export default TimerAnimation;
