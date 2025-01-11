import clsx from 'clsx';

import styles from './PageHome.module.css';
import IntroSection from '../../Sections/IntroSection';
import AboutSection from '../../Sections/AboutSection';
import EducationSection from '../../Sections/EducationSection';
import ExperienceSection from '../../Sections/ExperienceSection';
import SkillsSection from '../../Sections/SkillsSection';

function PageHome() {
	return (
		<div className={clsx('page', styles.root)}>
			<IntroSection />
			<AboutSection />
			<EducationSection />
			<ExperienceSection />
			<SkillsSection />
		</div>
	);
}

export default PageHome;
