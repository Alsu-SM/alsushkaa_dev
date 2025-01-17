import clsx from 'clsx';
import { EducationSectionProps } from './types';

import styles from './EducationSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';
import { renderContent } from './renders';

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
			<div className={styles.content}>{renderContent(language)}</div>
		</div>
	);
}

export default EducationSection;
