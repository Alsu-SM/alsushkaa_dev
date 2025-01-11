import { RefObject, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';

import { TriangleInterpolationProps } from './types';

import styles from './TriangleInterpolation.module.css';
import useInterpolation from './useInterpolation';

function TriangleInterpolation({
	className,
	sides,
}: TriangleInterpolationProps) {
	const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
	const canvasRefStatic: RefObject<HTMLCanvasElement> = useRef(null);

	const { init } = useInterpolation({
		canvas: canvasRef.current,
		canvasStatic: canvasRef.current,
		sides,
	});

	useLayoutEffect(() => {
		if (canvasRef.current !== null && canvasRefStatic.current !== null) {
			init(canvasRef.current, canvasRefStatic.current);
		}
	}, [canvasRef.current !== null && canvasRefStatic.current !== null]);

	return (
		<div className={clsx(styles.triangle, className)}>
			<canvas
				className={styles.canvas}
				ref={canvasRef}
				width={300}
				height={300}
			/>
			<canvas
				className={styles.canvas}
				ref={canvasRefStatic}
				width={300}
				height={300}
			/>
		</div>
	);
}

export default TriangleInterpolation;
