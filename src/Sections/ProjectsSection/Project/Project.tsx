import clsx from 'clsx';
import { ProjectProps } from './types';

import styles from './Project.module.css';
import mockup from '../../../Assets/mockup.png';

function Project({ item, className, style }: ProjectProps) {
	const {
		title,
		description,
		subDescription,
		technologies,
		result,
		imageResult = mockup,
	} = item;

	const technologiesRows = technologies.map((technology) => (
		<div key={technology.title} className={styles.technology_item}>
			<div className={styles.technology_item_title}>{technology.title}</div>
			<div className={styles.technology_item_description}>
				{technology.description}
			</div>
		</div>
	));

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.header}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description_column}>
					<div className={styles.description}>{description}</div>
					<div className={styles.sub_description}>{subDescription}</div>
				</div>
			</div>
			<div className={styles.technologies}>
				<div className={styles.technologies_title}>Used technologies</div>
				<div className={styles.technologies_list}>{technologiesRows}</div>
			</div>
			<div className={styles.result}>
				<div className={styles.result_description}>{result}</div>
				<img src={imageResult} className={styles.image} />
			</div>
		</div>
	);
}

export default Project;
