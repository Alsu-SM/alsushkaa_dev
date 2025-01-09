import clsx from 'clsx';
import { SliderProps } from './types';

import styles from './Slider.module.css';
import getTranslation from '../../Shared/getTranslation';
import useSlider from './useSlider';
import slider_point from '../../Assets/slider_point.png';
import arrow from '../../Assets/arrow.png';
import TimerAnimation from '../TimerAnimation';
import { MAX_SECONDS } from './constants';

function Slider({ textKeys, className, style }: SliderProps) {
	const {
		currentIndex,
		currentSeconds,
		language,
		contentRef,
		handleMouseEnter,
		handleMouseLeave,
		handleIncreaseIndex,
		handleDecreaseIndex,
		handlePointClick,
	} = useSlider(textKeys.length);

	const points = textKeys.map((key, index) => (
		<button
			key={key}
			className={clsx(styles.point_button, {
				[styles.point_button__active]: currentIndex === index,
			})}
			onClick={() => handlePointClick(index)}
		>
			<img src={slider_point} className={styles.point_button_image} />
		</button>
	));

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={styles.content_row}>
				<div className={styles.counter}>
					<TimerAnimation
						maxSeconds={MAX_SECONDS}
						currentSeconds={currentSeconds}
						className={styles.timer}
					/>
					<div className={styles.buttons_row}>
						<button
							className={clsx(styles.arrow_button, styles.arrow_button__left)}
							onClick={handleDecreaseIndex}
						>
							<img src={arrow} className={styles.arrow_button_image} />
						</button>
						{points}
						<button
							className={clsx(styles.arrow_button, styles.arrow_button__right)}
							onClick={handleIncreaseIndex}
						>
							<img src={arrow} className={styles.arrow_button_image} />
						</button>
					</div>
				</div>
				<div className={styles.content} ref={contentRef}>
					{getTranslation(textKeys[currentIndex], language)}
				</div>
			</div>
		</div>
	);
}

export default Slider;
