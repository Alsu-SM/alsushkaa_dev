import { hexToCSSFilter } from 'hex-to-css-filter';
import checkIsHex from './checkIsHex';
import convertRgbToHex from './converRgbToHex';
import { ACCENT_COLOR } from '../Shared/constants';

function getColorFilter(color: string = ACCENT_COLOR) {
	const hexColor = color
		? checkIsHex(color)
			? color
			: convertRgbToHex(color)
		: '';
	const filter = hexColor ? hexToCSSFilter(hexColor).filter : '';

	return filter ? filter.slice(0, filter.length - 1) : '';
}

export default getColorFilter;
