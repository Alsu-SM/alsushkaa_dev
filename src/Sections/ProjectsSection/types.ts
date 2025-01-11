import React from 'react';

export interface ProjectsSectionProps {
	className?: string;
	style?: React.CSSProperties;
}

export type ProjectTechnology = {
	title: string;
	description: string;
};

export type ProjectItem = {
	title: string;
	description: string;
	subDescription: string;
	technologies: ProjectTechnology[];
	link?: string;
	result: string;
	imageResult?: string;
};
