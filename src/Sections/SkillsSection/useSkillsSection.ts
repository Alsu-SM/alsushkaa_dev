import { useUnit } from 'effector-react';
import {
	languageGroups,
	softSkillsGroups,
	technicalSkillGroups,
} from './constants';
import { renderSkillGroup } from './renders';
import { $settings } from '../../Model/settings/state';

function useSkillsSection() {
	const { language } = useUnit($settings);

	const technicalSkillGroupRows = technicalSkillGroups.map((group, index) =>
		renderSkillGroup(group, language, index),
	);

	const softSkillGroupRows = softSkillsGroups.map((group, index) =>
		renderSkillGroup(group, language, index + technicalSkillGroups.length),
	);
	const languageGroupRows = languageGroups.map((group, index) =>
		renderSkillGroup(
			group,
			language,
			index + technicalSkillGroups.length + softSkillsGroups.length,
		),
	);

	return {
		technicalSkillGroupRows,
		softSkillGroupRows,
		languageGroupRows,
	};
}

export default useSkillsSection;
