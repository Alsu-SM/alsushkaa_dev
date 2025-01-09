import React from 'react';

export interface TimerAnimationProps {
	maxSeconds: number;
	currentSeconds: number;
	className?: string;
	style?: React.CSSProperties;
}

export type UseTimerAnimationParams = {
	maxSeconds: number;
	currentSeconds: number;
};
