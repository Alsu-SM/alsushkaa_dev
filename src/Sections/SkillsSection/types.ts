import React from 'react';
import { TRANSLATION_KEYS } from '../../Shared/constants';

export interface SkillsSectionProps {
	className?: string;
	style?: React.CSSProperties;
}

export type SkillGroup = {
	title?: TRANSLATION_KEYS;
	items: TRANSLATION_KEYS[];
};
