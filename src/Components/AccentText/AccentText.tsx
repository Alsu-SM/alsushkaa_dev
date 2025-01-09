import clsx from 'clsx';
import { AccentTextProps } from './types';

import styles from './AccentText.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import getTranslation from '../../Shared/getTranslation';
import { PUNCTUATION_REG_EXP } from './constants';

function AccentText({
	textKey,
	accentIndexes: accentIndex,
	className,
	style,
}: AccentTextProps) {
	const { language } = useUnit($settings);
	const text = getTranslation(textKey, language);

	const textItems = text.split(' ').map((word: string, index) => {
		const isAccent = accentIndex[language].includes(index);
		const isPunctuation = PUNCTUATION_REG_EXP.test(word);
		const isLastWord = index === text.length - 1;
		const formattedWord = isPunctuation || isLastWord ? word : `${word} `;

		return (
			<span
				className={clsx(styles.word, { [styles.word__accent]: isAccent })}
				key={`${word}_${index}_${textKey}`}
			>
				{formattedWord}
			</span>
		);
	});

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{textItems}
		</div>
	);
}

export default AccentText;
