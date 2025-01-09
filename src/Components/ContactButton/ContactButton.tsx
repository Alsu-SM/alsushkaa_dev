import { ContactButtonProps } from './types';

import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import Button from '../Button';
import getTranslation from '../../Shared/getTranslation';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';

function ContactButton({ className, style }: ContactButtonProps) {
	const { language } = useUnit($settings);

	return (
		<Button
			className={className}
			style={style}
			primary
			id={ELEMENT_IDS.ContactMe}
		>
			{getTranslation(TRANSLATION_KEYS.ContactMe, language)}
		</Button>
	);
}

export default ContactButton;
