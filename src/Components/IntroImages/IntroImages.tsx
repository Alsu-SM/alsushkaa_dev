import clsx from 'clsx';
import { IntroImagesProps } from './types';

import styles from './IntroImages.module.css';
import image_2_3 from '../../Assets/image_2_3.png';
import image_2 from '../../Assets/image_2.png';
import { ELEMENT_IDS } from '../../Shared/constants';

function IntroImages({ className, style }: IntroImagesProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<img
				src={image_2_3}
				className={styles.image}
				id={ELEMENT_IDS.IntroImage1}
				alt="background image 1"
			/>
			<img
				src={image_2}
				className={styles.image_2}
				id={ELEMENT_IDS.IntroImage2}
				alt="background image 2"
			></img>
		</div>
	);
}

export default IntroImages;
