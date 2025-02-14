import React from 'react';
import { TRANSLATION_KEYS } from '../../Shared/constants';

export interface ProjectsSectionProps {
	className?: string;
	style?: React.CSSProperties;
}

export type ProjectTechnology = {
	title: TRANSLATION_KEYS;
	description: TRANSLATION_KEYS;
};

export type ProjectItem = {
	title: TRANSLATION_KEYS;
	description: TRANSLATION_KEYS;
	subDescription: TRANSLATION_KEYS;
	technologies: ProjectTechnology[];
	link?: string;
	result: TRANSLATION_KEYS;
	imageResult?: string;
	isResultMobile: boolean;
};
