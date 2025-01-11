import { Point } from './Point';

export class Polygon {
	p: number;
	q: number;
	rc: number;
	m: number;
	ca: number;
	edge: number;
	step: number;
	a: number;
	vertices: Point[];
	parts: number;
	part_size: number;
	t: number = 0;
	speed_factor: number = 4;
	constructor(
		p: number | undefined,
		q: number | undefined,
		rc: number | undefined,
		m: number | undefined,
		parts: number,
		part_size: number,
	) {
		let angle;
		let correction;
		let x;
		let y;

		this.p = p || 3;
		this.q = q || 1;
		this.rc = rc || 75;
		this.ca = (2 * Math.PI) / this.p;
		this.edge = 2 * this.rc * Math.sin(this.ca / 2);
		this.m = m || 32;
		this.step = this.edge / this.m;
		this.a = ((this.p - 2 * this.q) * Math.PI) / this.p;
		this.vertices = [];
		this.parts = parts;
		this.part_size = part_size;

		for (let i = 0; i < this.p; i++) {
			correction = Math.floor(i / this.part_size);
			angle = (i * this.q + correction) * this.ca;

			x = Math.round(this.rc * Math.cos(angle));
			y = Math.round(this.rc * Math.sin(angle));

			this.vertices.push(new Point(x, y));
			this.vertices[i].idx = i;
		}
	}
	drawMe(ctx: CanvasRenderingContext2D) {
		let conn;

		for (let i = 0; i < this.p; i++) {
			conn =
				((i + 1) * this.q) % this.p !== 0
					? i + 1
					: Math.floor(i / this.part_size) * this.part_size;
			this.vertices[i].connectTo(ctx, this.vertices[conn]);
		}
	}

	traceMe(ctx: CanvasRenderingContext2D, color_t: number) {
		const _t = this.t / this.speed_factor;
		let idx;
		let f;
		let p0;
		let p1;
		let q0;
		let q1;
		let x = 0;
		let y = 0;

		for (let i = 0; i < this.parts; i++) {
			for (let j = 0; j < this.m; j++) {
				idx =
					i * this.part_size +
					(Math.floor((_t + j) / this.m + i) % this.part_size);
				p0 = this.vertices[idx];
				p1 = this.nextConnection(idx);

				f = ((_t + j) % this.m) / this.m;
				x = Math.round((1 - f) * p0.x + f * p1.x);
				y = Math.round((1 - f) * p0.y + f * p1.y);

				q0 = new Point(x, y);

				p0 = p1;
				p1 = this.nextConnection(p0.idx);

				x = Math.round((1 - f) * p0.x + f * p1.x);
				y = Math.round((1 - f) * p0.y + f * p1.y);

				q1 = new Point(x, y);
				ctx.strokeStyle = `hsl(${
					180 + (i / this.parts) * 120 + (color_t % 120)
				}, 100%, 65%)`;
				q0.connectTo(ctx, q1);
			}
		}
	}

	nextConnection(idx: number) {
		const base = Math.floor(idx / this.part_size);
		const new_idx = base * this.part_size + ((idx + 1) % this.part_size);

		return this.vertices[new_idx];
	}
}
