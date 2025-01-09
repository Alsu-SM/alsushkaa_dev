import clsx from 'clsx';
import { LanguageButtonProps } from './types';

import styles from './LanguageButton.module.css';
import Button from '../Button';
import { toggleLanguageEvent } from '../../Model/settings/events/events';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS } from '../../Shared/constants';

function LanguageButton({ className, style }: LanguageButtonProps) {
	const { language } = useUnit($settings);

	const handleClick = () => {
		toggleLanguageEvent();
	};

	return (
		<Button
			className={clsx(styles.root, styles.button, className)}
			style={style}
			id={ELEMENT_IDS.LanguageButton}
			onClick={handleClick}
		>
			{language}
		</Button>
	);
}

export default LanguageButton;
