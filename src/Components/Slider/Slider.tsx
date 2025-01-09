import clsx from 'clsx';
import { SliderProps } from './types';

import styles from './Slider.module.css';
import getTranslation from '../../Shared/getTranslation';
import useSlider from './useSlider';
import { numberPaths } from './constants';
import slider_point from '../../Assets/slider_point.png';
import arrow from '../../Assets/arrow.png';

function Slider({ textKeys, className, style }: SliderProps) {
	const { currentIndex, language } = useSlider();

	const path = numberPaths[currentIndex % numberPaths.length];
	const points = textKeys.map((key, index) => (
		<button
			key={key}
			className={clsx(styles.point_button, {
				[styles.point_button__active]: currentIndex === index + 1,
			})}
		>
			<img src={slider_point} className={styles.point_button_image} />
		</button>
	));

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.content_row}>
				<div className={styles.counter}>
					<img
						src={path}
						alt="slider index image"
						className={styles.counter_image}
					/>
				</div>
				<div className={styles.content}>
					{getTranslation(textKeys[0], language)}
				</div>
			</div>
			<div className={styles.buttons_row}>
				<button
					className={clsx(styles.arrow_button, styles.arrow_button__left)}
				>
					<img src={arrow} className={styles.arrow_button_image} />
				</button>
				{points}
				<button
					className={clsx(styles.arrow_button, styles.arrow_button__right)}
				>
					<img src={arrow} className={styles.arrow_button_image} />
				</button>
			</div>
		</div>
	);
}

export default Slider;
