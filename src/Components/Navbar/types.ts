import React from 'react';
import { Language } from '../../Model/settings/types';

export interface NavbarProps {
	className?: string;
	style?: React.CSSProperties;
}

export enum Path {
	About = 'about',
	Education = 'education',
	Experience = 'experience',
	Skills = 'skills',
	Projects = 'projects',
	Contacts = 'contacts',
}

export type MenuItem = {
	title: string;
	path: Path;
};

export type GetNavItemParams = {
	item: string;
	isActive: boolean;
	language: Language;
};
