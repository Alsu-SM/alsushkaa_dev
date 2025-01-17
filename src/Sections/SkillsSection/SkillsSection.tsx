import clsx from 'clsx';
import { SkillsSectionProps } from './types';

import styles from './SkillsSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';
import useSkillsSection from './useSkillsSection';

function SkillsSection({ className, style }: SkillsSectionProps) {
	const { language } = useUnit($settings);
	const { technicalSkillGroupRows, softSkillGroupRows, languageGroupRows } =
		useSkillsSection();

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionSkills}
		>
			<div className={styles.content}>
				<div className={clsx(styles.title, styles.title_1)}>
					{getTranslation(TRANSLATION_KEYS.SkillsType_1, language)}
				</div>
				{technicalSkillGroupRows}
				<div className={clsx(styles.title, styles.title_2)}>
					{getTranslation(TRANSLATION_KEYS.SkillsType_2, language)}
				</div>
				{softSkillGroupRows}
				<div className={clsx(styles.title, styles.title_3)}>
					{getTranslation(TRANSLATION_KEYS.SkillsType_3, language)}
				</div>
				{languageGroupRows}

				<div className={styles.message}>
					{getTranslation(TRANSLATION_KEYS.SkillsMessage, language)}
				</div>
			</div>
			<div className={styles.section_title}>
				{getTranslation(TRANSLATION_KEYS.LinkSkills, language)}
			</div>
			<div className={styles.bg} />
		</div>
	);
}

export default SkillsSection;
