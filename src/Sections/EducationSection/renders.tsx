import { Language } from '../../Model/settings/types';
import { EducationItem } from './types';
import styles from './EducationSection.module.css';
import getTranslation from '../../Shared/getTranslation';
import { TRANSLATION_KEYS } from '../../Shared/constants';
import { EDUCATION_ITEMS } from './constants';
import clsx from 'clsx';

export function renderContent(language: Language) {
	return EDUCATION_ITEMS.map((educationItem, index) => (
		<div
			className={clsx(styles.column, styles[`column_${index + 1}`])}
			key={index}
		>
			{renderEducationItem(educationItem, language)}
			<div className={styles.item_image_wrapper} />
		</div>
	));
}
export function renderEducationItem(item: EducationItem, language: Language) {
	return (
		<div className={styles.item} key={item.title}>
			<div className={styles.item_date}>
				{getTranslation(item.date, language)}
			</div>
			<div className={styles.item_title}>
				{getTranslation(item.title, language)}
			</div>
			{item.description.map((description) => (
				<div className={styles.item_description} key={description}>
					{getTranslation(description, language)}
				</div>
			))}
			{item.coreSkills && (
				<div className={styles.item_skills}>
					<div className={styles.item_skills_title}>
						{getTranslation(
							TRANSLATION_KEYS.EducationCoreSkillsTitle,
							language,
						)}
					</div>
					<div className={styles.item_skills_description}>
						{getTranslation(item.coreSkills, language)}
					</div>
				</div>
			)}
		</div>
	);
}
