import { IconProps } from '../types';

function Menu({ className, style }: IconProps) {
	return (
		<svg
			width="72"
			height="72"
			viewBox="0 0 72 72"
			fill="none"
			className={className}
			style={style}
		>
			<path
				id="Icon"
				d="M12 21H60M12 36H60M12 51H60"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Menu;
