import React from 'react';
import { ProjectItem } from '../types';

export interface ProjectProps {
	item: ProjectItem;
	className?: string;
	style?: React.CSSProperties;
}
