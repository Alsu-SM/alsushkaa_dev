const SIZE: number = 20;
const COLORS: string[] = ['#326f95'];

const CHARSET: string[] = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
];
const FPS: number = 6;

export function generateMatrixWall(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');

	let w: number;
	let h: number;
	let p: number[];
	const resize = () => {
		canvas.width = window.screen.availWidth;
		w = canvas.width;
		h = canvas.height;

		p = Array(Math.ceil(w / SIZE)).fill(0);
	};

	window.addEventListener('resize', resize);
	resize();

	const random = <T>(items: T[]): T =>
		items[Math.floor(Math.random() * items.length)];

	const draw = () => {
		if (!ctx) {
			return;
		}

		ctx.fillStyle = random(COLORS);
		ctx.font = `${SIZE}px sans-serif`;
		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.globalAlpha = 0.8;
		ctx.fillStyle = '#1d1d1d';
		ctx.globalCompositeOperation = 'destination-in';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();

		for (let i = 0; i < p.length; i += 1) {
			const v = p[i];
			ctx.fillText(random(CHARSET), i * SIZE, v);
			p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + SIZE;
		}
	};

	const animate = () => {
		draw();
		setTimeout(() => {
			requestAnimationFrame(animate);
		}, 1000 / FPS);
	};

	animate();
}
