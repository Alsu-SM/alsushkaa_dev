import React from 'react';

export interface SkillsSectionProps {
	className?: string;
	style?: React.CSSProperties;
}

export type SkillGroup = {
	title?: string;
	items: string[];
};
