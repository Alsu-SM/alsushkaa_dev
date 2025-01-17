import { TRANSLATION_KEYS } from '../../Shared/constants';
import { EducationItem } from './types';

export const EDUCATION_ITEMS: EducationItem[] = [
	{
		date: TRANSLATION_KEYS.EducationYears_1,
		title: TRANSLATION_KEYS.EducationTitle_1,
		description: [TRANSLATION_KEYS.EducationDescription_1],
		coreSkills: TRANSLATION_KEYS.EducationCoreSkills_1,
	},
	{
		date: TRANSLATION_KEYS.EducationYears_2,
		title: TRANSLATION_KEYS.EducationTitle_2,
		description: [TRANSLATION_KEYS.EducationDescription_2],
		coreSkills: TRANSLATION_KEYS.EducationCoreSkills_2,
	},
	{
		date: TRANSLATION_KEYS.EducationYears_3,
		title: TRANSLATION_KEYS.EducationTitle_3,
		description: [
			TRANSLATION_KEYS.EducationDescription_3_1,
			TRANSLATION_KEYS.EducationDescription_3_2,
		],
	},
];
