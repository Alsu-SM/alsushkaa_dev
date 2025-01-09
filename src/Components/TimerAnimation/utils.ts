export const degToRad = (degree: number): number => {
	const factor = Math.PI / 180;
	return degree * factor;
};
