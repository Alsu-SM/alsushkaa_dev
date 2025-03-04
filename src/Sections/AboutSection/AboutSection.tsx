import clsx from 'clsx';
import { AboutSectionProps } from './types';

import styles from './AboutSection.module.css';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import getTranslation from '../../Shared/getTranslation';
import image_4 from '../../Assets/image_7.png';
import image_5 from '../../Assets/image_5.png';
import AccentText from '../../Components/AccentText';
import { Language } from '../../Model/settings/types';
import Slider from '../../Components/Slider';

function AboutSection({ className, style }: AboutSectionProps) {
	const { language } = useUnit($settings);

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionAbout}
		>
			<img
				src={image_4}
				alt="abstract bg"
				className={clsx(styles.image, styles.image_1)}
			/>
			<img
				src={image_5}
				alt="abstract bg"
				className={clsx(styles.image, styles.image_2)}
			/>
			<div className={styles.content}>
				<div className={styles.greeting}>
					<div className={styles.greeting_row__accent}>
						{getTranslation(TRANSLATION_KEYS.AboutGreetingItem_1, language)}
					</div>
					<div className={styles.greeting_row}>
						{getTranslation(TRANSLATION_KEYS.AboutGreetingItem_2, language)}
					</div>
				</div>
				<div className={styles.description}>
					<Slider
						textKeys={[
							TRANSLATION_KEYS.AboutDescriptionItem_1,
							TRANSLATION_KEYS.AboutDescriptionItem_2,
							TRANSLATION_KEYS.AboutDescriptionItem_3,
							TRANSLATION_KEYS.AboutDescriptionItem_4,
						]}
					/>
				</div>
				<div className={styles.description_alternative}>
					<div className={styles.description_alternative_item}>
						{getTranslation(TRANSLATION_KEYS.AboutDescriptionItem_1, language)}
					</div>
					<div className={styles.description_alternative_item}>
						{getTranslation(TRANSLATION_KEYS.AboutDescriptionItem_2, language)}
					</div>
					<div className={styles.description_alternative_item}>
						{getTranslation(TRANSLATION_KEYS.AboutDescriptionItem_3, language)}
					</div>
					<div className={styles.description_alternative_item}>
						{getTranslation(TRANSLATION_KEYS.AboutDescriptionItem_4, language)}
					</div>
					<div
						className={clsx(
							styles.description_alternative_item,
							styles.description_alternative_item__short,
						)}
					>
						{getTranslation(
							TRANSLATION_KEYS.AboutDescriptionItem_1_short,
							language,
						)}
					</div>
					<div
						className={clsx(
							styles.description_alternative_item,
							styles.description_alternative_item__short,
						)}
					>
						{getTranslation(
							TRANSLATION_KEYS.AboutDescriptionItem_2_short,
							language,
						)}
					</div>
					<div
						className={clsx(
							styles.description_alternative_item,
							styles.description_alternative_item__short,
						)}
					>
						{getTranslation(
							TRANSLATION_KEYS.AboutDescriptionItem_3_short,
							language,
						)}
					</div>
					<div
						className={clsx(
							styles.description_alternative_item,
							styles.description_alternative_item__short,
						)}
					>
						{getTranslation(
							TRANSLATION_KEYS.AboutDescriptionItem_4_short,
							language,
						)}
					</div>
				</div>
			</div>
			<div className={styles.standard}>
				<AccentText
					textKey={TRANSLATION_KEYS.AboutStandard}
					accentIndexes={{
						[Language.EN]: [6, 13, 14, 15],
						[Language.RU]: [8, 14, 15, 16],
					}}
				/>
			</div>
			<div className={clsx(styles.section_title, styles[language])}>
				{getTranslation(TRANSLATION_KEYS.LinkAbout, language)}
			</div>
		</div>
	);
}

export default AboutSection;
