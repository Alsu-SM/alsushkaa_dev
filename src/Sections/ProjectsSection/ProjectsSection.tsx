import clsx from 'clsx';
import { ProjectsSectionProps } from './types';

import styles from './ProjectsSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';

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
					<div className={styles.project_type_title}>Work projects</div>
					<div className={styles.project_type_description}>
						Most work projects I took part in are under NDE, so I prepared some
						study cases and built little wireframe examples for you to get the
						main ideas behind them
					</div>
				</div>
				<div className={styles.project_type_image} />
			</div>
			<div className={clsx(styles.project_type, styles.project_type_2)}>
				<div className={styles.project_type_content}>
					<div className={styles.project_type_title}>Pet projects</div>
					<div className={styles.project_type_description}>
						I’m happy to present some of my favorite pet projects I made in my
						spare time. It was fun and helped me improve some funky skills
					</div>
				</div>
				<div className={styles.project_type_image} />
			</div>
		</div>
	);
}

export default ProjectsSection;
