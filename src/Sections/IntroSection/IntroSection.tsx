import clsx from 'clsx';
import { IntroSectionProps } from './types';
import styles from './IntroSection.module.css';
import IntroTypeIt from '../../Components/IntroTypeIt';
import ContactButton from '../../Components/ContactButton';
import { ELEMENT_IDS } from '../../Shared/constants';

import IntroFooter from '../../Components/IntroFooter';
import IntroMotivation from '../../Components/IntroMotivation';
import HandButton from '../../Components/HandButton';
import { Path } from '../../Components/Navbar/types';
import image_2_3 from '../../Assets/image_2_3.png';

function IntroSection({ className, style }: IntroSectionProps) {
	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionIntro}
		>
			<section className={styles.section}>
				<div className={styles.content}>
					<IntroTypeIt />
					<div
						className={styles.motivation_wrapper}
						id={ELEMENT_IDS.MotivationWrapper}
					>
						<IntroMotivation />
						<ContactButton className={styles.contact_button} />
					</div>
					<img
						src={image_2_3}
						className={styles.image_1}
						id={ELEMENT_IDS.IntroImage1}
						alt="background image 1"
					/>
				</div>
				<IntroFooter />
				<HandButton path={Path.About} className={styles.hand} />
			</section>
		</div>
	);
}

export default IntroSection;
