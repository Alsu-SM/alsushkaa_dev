import React from 'react';
import { TRANSLATION_KEYS } from '../../Shared/constants';
import { Language } from '../../Model/settings/types';

export interface AccentTextProps {
	textKey: TRANSLATION_KEYS;
	accentIndexes: Record<Language, number[]>;
	className?: string;
	style?: React.CSSProperties;
}
