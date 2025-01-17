import clsx from 'clsx';
import { IntroTypeItProps } from './types';

import styles from './IntroTypeIt.module.css';
import TypeIt from 'typeit-react';

import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import getTranslation from '../../Shared/getTranslation';
import { OPTIONS } from './constants';

function IntroTypeIt({ className, style }: IntroTypeItProps) {
	const { language } = useUnit($settings);
	const FRONTEND_DEVELOPER = `${getTranslation(
		TRANSLATION_KEYS.IntroFrontendDeveloper,
		language,
	)} `;

	return (
		<div
			className={clsx(styles.type_writer, styles.root, className)}
			style={style}
			id={ELEMENT_IDS.IntroTypeIt}
		>
			<span className={styles.greet_row}>
				{getTranslation(TRANSLATION_KEYS.IntroHiIAmName, language)}
			</span>
			<TypeIt
				className={styles.type_it}
				options={{ ...OPTIONS, strings: [FRONTEND_DEVELOPER] }}
			/>
		</div>
	);
}

export default IntroTypeIt;
