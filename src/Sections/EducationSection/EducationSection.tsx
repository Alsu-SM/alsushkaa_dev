import clsx from 'clsx';
import { EducationSectionProps } from './types';

import styles from './EducationSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';

function EducationSection({ className, style }: EducationSectionProps) {
	const { language } = useUnit($settings);

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionEducation}
		>
			<div className={styles.section_title}>
				{getTranslation(TRANSLATION_KEYS.LinkEducation, language)}
			</div>
			<div className={styles.content}>
				<div className={clsx(styles.column, styles.column_1)}>
					<div className={styles.item}>
						<div className={styles.item_date}>2018 — 2019</div>
						<div className={styles.item_title}>
							Technical University of Dortmund, Germany
						</div>
						<div className={styles.item_description}>
							Faculty of Electrical Engineering and Information Technology:
							Information and Communication Technologies
						</div>
						<div className={styles.item_skills}>
							<div className={styles.item_skills_title}>Core skills:</div>
							<div className={styles.item_skills_description}>
								data structures, object-oriented programming, electrostatics,
								electrodynamics, higher mathematics, spoken and written German
							</div>
						</div>
					</div>
				</div>
				<div className={clsx(styles.column, styles.column_2)}>
					<div className={styles.item}>
						<div className={styles.item_date}>2019 — 2023</div>
						<div className={styles.item_title}>
							The National Research State University of Nizhny Novgorod, Russia
						</div>
						<div className={styles.item_description}>
							Institute of Information Technology, Mathematics and Mechanics:
							Applied Informatics
						</div>
						<div className={styles.item_skills}>
							<div className={styles.item_skills_title}>Core skills:</div>
							<div className={styles.item_skills_description}>
								design patterns, data structures, object-oriented programming,
								basics and depths of various programming languages including C,
								C# and JS, higher mathematics, spoken and written English.
							</div>
						</div>
					</div>
				</div>
				<div className={clsx(styles.column, styles.column_3)}>
					<div className={styles.item}>
						<div className={styles.item_date}>2023 — ∞</div>
						<div className={styles.item_title}>life journey</div>
						<div className={styles.item_description}>
							I continue to explore this world, try new things, pick up modern
							technologies and hone old skills
						</div>
						<div className={styles.item_description}>
							In this field you have no choice but to learn something new every
							day and I adore it
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bg}></div>
		</div>
	);
}

export default EducationSection;
