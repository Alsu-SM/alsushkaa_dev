import clsx from 'clsx';
import { ContactSectionProps } from './types';

import styles from './ContactSection.module.css';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { ELEMENT_IDS, TRANSLATION_KEYS } from '../../Shared/constants';
import getTranslation from '../../Shared/getTranslation';
import resume from '../../Assets/resume.pdf';
import Button from '../../Components/Button';
import HandButton from '../../Components/HandButton';
import { Path } from '../../Components/Navbar/types';
import useContact from './useContact';

function ContactSection({ className, style }: ContactSectionProps) {
	const { language } = useUnit($settings);
	const { handleCopyPhone, handleCopyEmail, copyEmailRef, copyPhoneRef } =
		useContact();

	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id={ELEMENT_IDS.SectionContacts}
		>
			<div className={styles.content}>
				<div className={styles.messages}>
					<div className={clsx(styles.message, styles.message_accent)}>
						{getTranslation(TRANSLATION_KEYS.ContactsTitle, language)}
					</div>
					<div className={styles.message}>
						{getTranslation(TRANSLATION_KEYS.ContactsDescription, language)}
					</div>
				</div>
				<div className={styles.contacts}>
					<div className={styles.contacts_title}>
						{getTranslation(TRANSLATION_KEYS.ContactsFindMeOn, language)}
					</div>
					<div className={styles.contacts_group}>
						<a
							href="https://t.me/alsushkaa14"
							target="_blank"
							rel="noreferrer"
							className={styles.contacts_item}
						>
							Telegram
						</a>
						<a
							href="https://wa.me/+79030423797"
							target="_blank"
							rel="noreferrer"
							className={styles.contacts_item}
						>
							Whatsapp
						</a>
						<a
							href="mailto: alsu1shareeva@gmail.com"
							target="_blank"
							rel="noreferrer"
							className={styles.contacts_item}
						>
							Gmail
						</a>
						<a
							href="tel: +79030423797"
							target="_blank"
							rel="noreferrer"
							className={styles.contacts_item}
						>
							{getTranslation(TRANSLATION_KEYS.ContactsCallMe, language)}
						</a>
					</div>
					<div className={styles.buttons}>
						<Button className={styles.button_copy} onClick={handleCopyPhone}>
							<div className={styles.button_content} ref={copyPhoneRef}>
								{getTranslation(TRANSLATION_KEYS.ContactsCopyPhone, language)}
							</div>
						</Button>
						<Button className={styles.button_copy} onClick={handleCopyEmail}>
							<div className={styles.button_content} ref={copyEmailRef}>
								{getTranslation(TRANSLATION_KEYS.ContactsCopyEmail, language)}
							</div>
						</Button>
						<Button className={styles.button_download}>
							<a
								className={styles.link_download}
								download="shareeva_am_resume_ru.pdf"
								href={resume}
							>
								{`${getTranslation(
									TRANSLATION_KEYS.ContactsDownloadResume,
									language,
								)}`}
							</a>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.title_column}>
				<div className={styles.section_title}>
					{getTranslation(TRANSLATION_KEYS.LinkContacts, language)}
				</div>
				<div className={styles.image_wrapper}>
					<div className={styles.hands} />
				</div>
			</div>
			<HandButton path={Path.Home} className={styles.hand_button} />
		</div>
	);
}

export default ContactSection;
