import { useRef } from 'react';
import { UseInterpolationProps } from './types';
import { Polygon } from './Polygon';

function useInterpolation({ sides }: UseInterpolationProps) {
	let req_id = useRef<number>(0);

	const P = sides;
	const Q = 1;

	let parts;
	let part_size;
	var w: number;
	var h: number;
	const k = 0.95;
	let poly: Polygon | null = null;
	let t = 0;
	let color_t = 0;
	console.log('test');

	const gcd = function (a: number, b: number): number {
		if (!b) return a;
		return gcd(b, a % b);
	};

	const init = (canvas: HTMLCanvasElement, canvasStatic: HTMLCanvasElement) => {
		const ctx_s = canvasStatic.getContext('2d');
		const ctx_a = canvas.getContext('2d');

		const s = getComputedStyle(canvasStatic);
		let circumradius;

		if (req_id.current) {
			cancelAnimationFrame(req_id.current);
		}

		parts = gcd(P, Q);
		part_size = P / parts;

		w = canvasStatic.width = canvas.width = ~~s.width.split('px')[0];
		h = canvasStatic.height = canvas.height = ~~s.height.split('px')[0];

		circumradius = ~~((k * Math.min(w, h)) / 2);

		poly = new Polygon(P, Q, circumradius, 0, parts, part_size);

		if (!ctx_s || !ctx_a) {
			return;
		}

		ctx_s.translate(w / 2, h / 2);
		ctx_a.translate(w / 2, h / 2);

		ctx_s.strokeStyle = 'rgba(255,255,255,0.1)';

		drawStatic(ctx_s, poly);
		drawAni(ctx_a, poly);
	};

	const drawStatic = function (ctx_s: CanvasRenderingContext2D, poly: Polygon) {
		poly.drawMe(ctx_s);
	};

	let isClockWise = true;

	const drawAni = function (ctx_a: CanvasRenderingContext2D, poly: Polygon) {
		if (poly.t % poly.speed_factor == 0) {
			ctx_a.clearRect(-w / 2, -h / 2, w, h);
			poly.traceMe(ctx_a, color_t);
		}
		poly.t++;
		if (t % 10 === 0) {
			if (isClockWise) {
				if (color_t + 1 < 120) {
					color_t++;
				} else {
					color_t--;
					isClockWise = false;
				}
			} else {
				if (color_t - 1 > 0) {
					color_t--;
				} else {
					color_t++;
					isClockWise = true;
				}
			}
		}

		req_id.current = requestAnimationFrame(() => drawAni(ctx_a, poly));
	};

	return { init };
}

export default useInterpolation;
