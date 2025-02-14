import { ContactButtonProps } from './types';

import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import Button from '../Button';
import getTranslation from '../../Shared/getTranslation';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import { Path } from '../Navbar/types';
import { scrollIntoView } from '../../Utils/scrollIntoView';

function ContactButton({ className, style }: ContactButtonProps) {
	const { language } = useUnit($settings);

	const handleClick = () => {
		scrollIntoView(Path.Contacts);
	};

	return (
		<Button
			className={className}
			style={style}
			primary
			id={ELEMENT_IDS.ContactMe}
			onClick={handleClick}
		>
			{getTranslation(TRANSLATION_KEYS.ContactMe, language)}
		</Button>
	);
}

export default ContactButton;
