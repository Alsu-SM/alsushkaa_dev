import React from 'react';
import { TRANSLATION_KEYS } from '../../Shared/constants';

export interface EducationSectionProps {
	className?: string;
	style?: React.CSSProperties;
}

export type EducationItem = {
	date: TRANSLATION_KEYS;
	title: TRANSLATION_KEYS;
	description: TRANSLATION_KEYS[];
	coreSkills?: TRANSLATION_KEYS;
};
