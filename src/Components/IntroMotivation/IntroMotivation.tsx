import clsx from 'clsx';
import { IntroMotivationProps } from './types';

import styles from './IntroMotivation.module.css';
import AccentText from '../AccentText';
import { TRANSLATION_KEYS } from '../../Shared/constants';
import { Language } from '../../Model/settings/types';

function IntroMotivation({ className, style }: IntroMotivationProps) {
	return (
		<div
			className={clsx(styles.root, styles.motivation, className)}
			style={style}
		>
			<AccentText
				textKey={TRANSLATION_KEYS.IntroMotivation}
				accentIndexes={{ [Language.EN]: [5], [Language.RU]: [5] }}
			/>
		</div>
	);
}

export default IntroMotivation;
