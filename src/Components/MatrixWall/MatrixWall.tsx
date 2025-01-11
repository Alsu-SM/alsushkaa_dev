import { RefObject, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';

import { generateMatrixWall } from './generateMatrixWall';
import { MatrixWallProps } from './types';

import styles from './MatrixWall.module.css';

function MatrixWall(props: MatrixWallProps) {
	const { className, width, height } = props;
	const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);

	useLayoutEffect(() => {
		if (canvasRef.current !== null) {
			generateMatrixWall(canvasRef.current);
		}
	}, [canvasRef.current !== null]);

	return (
		<canvas
			className={clsx(styles.matrix_wall, className)}
			ref={canvasRef}
			width={width}
			height={height}
		/>
	);
}

export default MatrixWall;
