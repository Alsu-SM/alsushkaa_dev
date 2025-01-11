export class Point {
	x: number;
	y: number;
	idx: number = 0;
	idy: number = 0;
	constructor(x: number | undefined, y: number | undefined) {
		this.x = x || 0;
		this.y = y || 0;
	}
	drawMe(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI);
		ctx.closePath();
		ctx.fill();
	}
	connectTo(ctx: CanvasRenderingContext2D, point: Point) {
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(point.x, point.y);
		ctx.closePath();
		ctx.stroke();
	}
}
