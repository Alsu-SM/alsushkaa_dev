import clsx from 'clsx';
import { SkillsSectionProps } from './types';

import styles from './SkillsSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';
import useSkillsSection from './useSkillsSection';
import img_1 from '../../Assets/ed_6.png';

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
				<div className={clsx(styles.column, styles.column_1)}>
					<div className={styles.skill_type}>
						<div className={styles.title}>Technical skills</div>
						<div className={styles.skills_groups}>
							{technicalSkillGroupRows}
						</div>
						<img src={img_1} className={styles.image} />
					</div>
				</div>
				<div className={clsx(styles.column, styles.column_2)}>
					<div className={styles.skills}>
						<div className={styles.skill_type}>
							<div className={styles.title}>Soft skills</div>
							<div className={styles.skills_groups}>{softSkillGroupRows}</div>
						</div>
						<div className={styles.skill_type}>
							<div className={styles.title}>Languages</div>
							<div className={styles.skills_groups}>{languageGroupRows}</div>
						</div>
					</div>

					<div className={styles.message}>
						I am a fast and diligent learner and any skill you find missing in
						this page is an opportunity for me to gain new knowledge
					</div>
				</div>
			</div>
			<div className={styles.section_title}>
				{getTranslation(TRANSLATION_KEYS.LinkSkills, language)}
			</div>
		</div>
	);
}

export default SkillsSection;
