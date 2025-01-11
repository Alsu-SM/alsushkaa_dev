import {
	languageGroups,
	softSkillsGroups,
	technicalSkillGroups,
} from './constants';
import { renderSkillGroup } from './renders';

function useSkillsSection() {
	const technicalSkillGroupRows = technicalSkillGroups.map(renderSkillGroup);
	const softSkillGroupRows = softSkillsGroups.map(renderSkillGroup);
	const languageGroupRows = languageGroups.map(renderSkillGroup);

	return { technicalSkillGroupRows, softSkillGroupRows, languageGroupRows };
}

export default useSkillsSection;
