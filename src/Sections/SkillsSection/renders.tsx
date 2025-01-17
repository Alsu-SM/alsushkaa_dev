import { SkillGroup } from './types';
import styles from './SkillsSection.module.css';
import { Language } from '../../Model/settings/types';
import getTranslation from '../../Shared/getTranslation';
import clsx from 'clsx';

export function renderSkillGroup(
	{ title, items }: SkillGroup,
	language: Language,
	index: number,
) {
	return (
		<div className={clsx(styles.row, styles[`row_${index + 1}`])}>
			<div className={styles.skill_wrapper}>
				<div className={styles.skills_group}>
					{title && (
						<div className={styles.skills_group_title}>
							{getTranslation(title, language)}
						</div>
					)}
					<div className={styles.skills_group_items}>
						{items.map((item) => (
							<div className={styles.skills_group_item} key={item}>
								{getTranslation(item, language)}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.skill_image_wrapper} />
		</div>
	);
}
