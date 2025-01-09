import { useEffect, useRef } from 'react';
import { UseTimerAnimationParams } from './types';
import { degToRad } from './utils';

function useTimerAnimation({
	maxSeconds,
	currentSeconds,
}: UseTimerAnimationParams) {
	const ref = useRef<HTMLCanvasElement | null>(null);

	const init = () => {
		if (!ref.current) {
			return;
		}

		const canvas = ref.current;
		const ctx = canvas.getContext('2d');

		if (!ctx) {
			return;
		}

		ctx.strokeStyle = '#252d3e';
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';
		ctx.shadowBlur = 5;
		ctx.shadowColor = '#252d3e';
	};

	const renderTimer = () => {
		if (!ref.current) {
			return;
		}

		const canvas = ref.current;
		const ctx = canvas.getContext('2d');

		if (!ctx) {
			return;
		}
		ctx.fillStyle = '#1D1D1D';
		ctx.fillRect(0, 0, 500, 500);

		ctx.beginPath();

		ctx.arc(
			canvas.width / 2,
			canvas.width / 2,
			(canvas.width / 2) * 0.9,
			0,
			degToRad((360 / maxSeconds) * currentSeconds),
			false,
		);
		ctx.stroke();
	};

	useEffect(() => {
		renderTimer();
	}, [maxSeconds, currentSeconds]);

	useEffect(() => {
		if (ref.current !== null) {
			init();
		}
	}, [ref.current === null]);

	return { ref, init };
}

export default useTimerAnimation;
