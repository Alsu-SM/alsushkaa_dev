import React from 'react';
import { TRANSLATION_KEYS } from '../../Shared/constants';

export interface SliderProps {
	textKeys: TRANSLATION_KEYS[];
	className?: string;
	style?: React.CSSProperties;
}
