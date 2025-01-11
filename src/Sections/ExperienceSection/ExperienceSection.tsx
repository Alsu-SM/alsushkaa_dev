import clsx from 'clsx';
import { ExperienceSectionProps } from './types';

import styles from './ExperienceSection.module.css';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import getTranslation from '../../Shared/getTranslation';
import gummyBears from '../../Assets/gummy_bears.png';

function ExperienceSection({ className, style }: ExperienceSectionProps) {
	const { language } = useUnit($settings);

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionExperience}
		>
			<div className={styles.content}>
				<div className={styles.experience_column}>
					<div className={styles.item}>
						<div className={styles.item_date}>summer 2023 — current time</div>
						<div className={styles.item_title}>
							Junior+ — Middle+ Frontend Developer
						</div>
						<div className={styles.item_location}>@EvrazIT</div>
						<div className={styles.item_description}>
							{' '}
							A place where I felt I was valued and given the opportunity to
							develop freely. Many different projects in the fields of mining,
							metallurgy and management helped me move forward. The skill matrix
							added more fun and motivation into this process.
						</div>
						<div className={styles.responsibility}>
							<div className={styles.responsibility_title}>
								My responsibilities included:
							</div>
							<div className={styles.responsibility_description}>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Developing according to internal standards.
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Minimal use of external libraries: in-house implementation is
									preferable
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Developing of the company's UI kit
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Leading role in a large number of projects, including projects
									of the highest priority
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Cross-review and code review. Refactoring.
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Acceptance of layouts, working out questions with project
									analytics, maintaining documentation
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Learning new technologies and working with PWA, web-sockets
									and Web APIs
								</div>
								<div className={styles.responsibility_description_item}>
									<img
										src={gummyBears}
										className={styles.icon}
										alt="gummy bears"
									/>
									Solving new architectural problems and optimizing systems that
									work with large amounts of data
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.experience_message_column}>
					<div className={styles.message}>
						I am thankful for this experience and for everything I have learned
						in these years
					</div>
					<div className={styles.experience}>
						<div className={styles.item}>
							<div className={styles.item_date}>winter 2021 — summer 2023</div>
							<div className={styles.item_title}>
								Trainee — Junior+ Frontend Developer
							</div>
							<div className={styles.item_location}>@AutomateBusiness</div>
							<div className={styles.item_description}>
								First steps into the world of professional development and rapid
								growth due to a huge amount of practice on projects in the field
								of finance, water supply and metallurgy
							</div>
							<div className={styles.responsibility}>
								<div className={styles.responsibility_title}>
									My responsibilities included:
								</div>
								<div className={styles.responsibility_description}>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										Creating new projects from scratch and supporting old ones
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										Thinking through complex logic and making layout of
										beautiful landing pages
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										Mastering new libraries and developing auxiliary custom
										hooks, utilities, packages and components
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										Participating in cross-reviews and conducting code reviews
									</div>
									<div className={styles.responsibility_description_item}>
										<img
											src={gummyBears}
											className={styles.icon}
											alt="gummy bears"
										/>
										Having leading role in creating a product in the water
										supply sector, included in the register of Russian software
									</div>
								</div>
							</div>
						</div>
						<div className={styles.image_wrapper}></div>
					</div>
				</div>
			</div>
			<div className={styles.section_title}>
				{getTranslation(TRANSLATION_KEYS.LinkExperience, language)}
			</div>
		</div>
	);
}

export default ExperienceSection;
