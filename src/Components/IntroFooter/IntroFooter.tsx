import clsx from 'clsx';
import { IntroFooterProps } from './types';

import styles from './IntroFooter.module.css';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import getTranslation from '../../Shared/getTranslation';
import gummyBears from '../../Assets/gummy_bears.png';

function IntroFooter({ className, style }: IntroFooterProps) {
	const { language } = useUnit($settings);

	return (
		<div
			className={clsx(styles.root, styles.footer, className)}
			style={style}
			id={ELEMENT_IDS.IntroFooter}
		>
			<div className={styles.footer_column}>
				<div className={styles.footer_item}>
					<img src={gummyBears} className={styles.icon} alt="gummy bears" />
					{getTranslation(TRANSLATION_KEYS.IntroFooterItem_1, language)}
				</div>
				<div className={styles.footer_item}>
					<img src={gummyBears} className={styles.icon} alt="gummy bears" />
					{getTranslation(TRANSLATION_KEYS.IntroFooterItem_2, language)}
				</div>
				<div className={styles.footer_item}>
					<img src={gummyBears} className={styles.icon} alt="gummy bears" />
					{getTranslation(TRANSLATION_KEYS.IntroFooterItem_3, language)}
				</div>
			</div>
			<div className={clsx(styles.footer_column, styles.footer_column__left)}>
				<div className={styles.footer_item}>
					{getTranslation(TRANSLATION_KEYS.IntroFooterItem_4, language)}
					<img src={gummyBears} className={styles.icon} alt="gummy bears" />
				</div>
				<div className={styles.footer_item}>
					{getTranslation(TRANSLATION_KEYS.IntroFooterItem_5, language)}
					<img src={gummyBears} className={styles.icon} alt="gummy bears" />
				</div>
				<div className={styles.footer_item}>
					{getTranslation(TRANSLATION_KEYS.IntroFooterItem_6, language)}
					<img src={gummyBears} className={styles.icon} alt="gummy bears" />
				</div>
			</div>
		</div>
	);
}

export default IntroFooter;
