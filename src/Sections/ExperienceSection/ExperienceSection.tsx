import clsx from 'clsx';
import { ExperienceSectionProps } from './types';

import styles from './ExperienceSection.module.css';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import getTranslation from '../../Shared/getTranslation';
import gummyBears from '../../Assets/gummy_bears.png';

function ExperienceSection({ className, style }: ExperienceSectionProps) {
	const { language } = useUnit($settings);

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionExperience}
		>
			<div className={styles.content}>
				<div className={styles.experience_column}>
					<div className={styles.item}>
						<div className={styles.item_date}>
							{getTranslation(TRANSLATION_KEYS.ExperienceYears_1, language)}
						</div>
						<div className={styles.item_title}>
							Junior+ — Middle+ Frontend Developer
						</div>
						<div className={styles.item_location}>@EvrazIT</div>
						<div className={styles.item_description}>
							{getTranslation(
								TRANSLATION_KEYS.ExperienceDescription_1,
								language,
							)}
						</div>
						<div className={styles.responsibility}>
							<div className={styles.responsibility_title}>
								{getTranslation(
									TRANSLATION_KEYS.ExperienceResponsibility,
									language,
								)}
							</div>
							<div className={styles.responsibility_description}>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_1,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_2,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_3,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_4,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_5,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_6,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_7,
										language,
									)}
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility_1_8,
										language,
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.experience_message_column}>
					<div className={styles.message}>
						{getTranslation(TRANSLATION_KEYS.ExperienceGratitude, language)}
					</div>
					<div className={styles.experience}>
						<div className={styles.item}>
							<div className={styles.item_date}>
								{getTranslation(TRANSLATION_KEYS.ExperienceYears_2, language)}
							</div>
							<div className={styles.item_title}>
								Trainee — Junior+ Frontend Developer
							</div>
							<div className={styles.item_location}>@AutomateBusiness</div>
							<div className={styles.item_description}>
								{getTranslation(
									TRANSLATION_KEYS.ExperienceDescription_2,
									language,
								)}
							</div>
							<div className={styles.responsibility}>
								<div className={styles.responsibility_title}>
									{getTranslation(
										TRANSLATION_KEYS.ExperienceResponsibility,
										language,
									)}
								</div>
								<div className={styles.responsibility_description}>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										{getTranslation(
											TRANSLATION_KEYS.ExperienceResponsibility_2_1,
											language,
										)}
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										{getTranslation(
											TRANSLATION_KEYS.ExperienceResponsibility_2_2,
											language,
										)}
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										{getTranslation(
											TRANSLATION_KEYS.ExperienceResponsibility_2_3,
											language,
										)}
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										{getTranslation(
											TRANSLATION_KEYS.ExperienceResponsibility_2_4,
											language,
										)}
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										{getTranslation(
											TRANSLATION_KEYS.ExperienceResponsibility_2_5,
											language,
										)}
									</div>
								</div>
							</div>
						</div>
						<div className={styles.image_wrapper}></div>
					</div>
				</div>
			</div>
			<div className={styles.section_title}>
				{getTranslation(TRANSLATION_KEYS.LinkExperience, language)}
			</div>
		</div>
	);
}

export default ExperienceSection;
