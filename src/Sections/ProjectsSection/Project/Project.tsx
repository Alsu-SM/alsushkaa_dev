import clsx from 'clsx';
import { ProjectProps } from './types';

import styles from './Project.module.css';
import mockup from '../../../Assets/mockup.png';
import { useUnit } from 'effector-react';
import { $settings } from '../../../Model/settings/state';
import getTranslation from '../../../Shared/getTranslation';
import { TRANSLATION_KEYS } from '../../../Shared/constants';

function Project({ item, className, style }: ProjectProps) {
	const {
		title,
		description,
		subDescription,
		technologies,
		result,
		imageResult = mockup,
		isResultMobile,
	} = item;
	const { language } = useUnit($settings);

	const technologiesRows = technologies.map((technology) => (
		<div key={technology.title} className={styles.technology_item}>
			<div className={styles.technology_item_title}>
				{getTranslation(technology.title, language)}
			</div>
			<div className={styles.technology_item_description}>
				{getTranslation(technology.description, language)}
			</div>
		</div>
	));

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.header}>
				<div className={styles.title}>{getTranslation(title, language)}</div>
				<div className={styles.description_column}>
					<div className={styles.description}>
						{getTranslation(description, language)}
					</div>
					<div className={styles.sub_description}>
						{getTranslation(subDescription, language)}
					</div>
				</div>
			</div>
			<div className={styles.technologies}>
				<div className={styles.technologies_title}>
					{getTranslation(TRANSLATION_KEYS.ProjectsUsedTechnologies, language)}
				</div>
				<div className={styles.technologies_list}>{technologiesRows}</div>
			</div>
			<div
				className={clsx(styles.result, {
					[styles.result__mobile]: isResultMobile,
				})}
			>
				<div className={styles.result_description}>
					{getTranslation(result, language)}
				</div>
				<img
					src={imageResult}
					className={clsx(styles.image, {
						[styles.image__mobile]: isResultMobile,
					})}
				/>
			</div>
		</div>
	);
}

export default Project;
