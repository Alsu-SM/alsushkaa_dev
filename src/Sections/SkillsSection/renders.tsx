import { SkillGroup } from './types';
import styles from './SkillsSection.module.css';

export function renderSkillGroup({ title, items }: SkillGroup) {
	return (
		<div className={styles.skills_group}>
			{title && <div className={styles.skills_group_title}>{title}</div>}
			<div className={styles.skills_group_items}>
				{items.map((item) => (
					<div className={styles.skills_group_item}>{item}</div>
				))}
			</div>
		</div>
	);
}
