import clsx from 'clsx';
import { ProjectsSectionProps } from './types';

import styles from './ProjectsSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';
import Project from './Project/Project';
import {
	DATA_VISUALIZATION_PROJECT,
	GRADIENT_PICKER_PROJECT,
	PUFF_TRACKER_PROJECT,
	PWA_PROJECT,
	TMC_PROJECT,
	UN_PUZZLE_PROJECT,
} from './constants';

function ProjectsSection({ className, style }: ProjectsSectionProps) {
	const { language } = useUnit($settings);

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionProjects}
		>
			<div className={styles.section_title}>
				{getTranslation(TRANSLATION_KEYS.LinkProjects, language)}
			</div>
			<div className={styles.project_type}>
				<div className={styles.project_type_content}>
					<div className={styles.project_type_title}>
						{getTranslation(TRANSLATION_KEYS.WorkProjects, language)}
					</div>
					<div className={styles.project_type_description}>
						{getTranslation(TRANSLATION_KEYS.WorkProjectsDescription, language)}
					</div>
				</div>
				<div className={styles.project_type_image} />
			</div>
			<div className={styles.projects}>
				<Project item={PWA_PROJECT} />
				<Project item={TMC_PROJECT} />
			</div>
			<div className={clsx(styles.project_type, styles.project_type_2)}>
				<div className={styles.project_type_content}>
					<div className={styles.project_type_title}>
						{getTranslation(TRANSLATION_KEYS.PetProjects, language)}
					</div>
					<div className={styles.project_type_description}>
						{getTranslation(TRANSLATION_KEYS.PetProjectsDescription, language)}
					</div>
				</div>
				<div className={styles.project_type_image} />
			</div>
			<div className={styles.projects}>
				<Project item={PUFF_TRACKER_PROJECT} />
				<Project item={GRADIENT_PICKER_PROJECT} />
				<Project item={DATA_VISUALIZATION_PROJECT} />
				<Project item={UN_PUZZLE_PROJECT} />
			</div>
		</div>
	);
}

export default ProjectsSection;
