import clsx from 'clsx';
import { NavbarProps } from './types';

import styles from './Navbar.module.css';
import useNavbar from './useNavbar';
import LanguageButton from '../LanguageButton';
import Logo from '../Logo';
import ContactButton from '../ContactButton';
import Button from '../Button';
import { Cross, Menu } from '../Icons';
import Sheet from '../Sheet';
import exportTranslations from '../../Shared/exportTranslations';

function Navbar({ className, style }: NavbarProps) {
	const { navLinks, isNavModalShown, handleOpen, handleClose } = useNavbar();

	return (
		<nav className={clsx(styles.root, styles.nav, className)} style={style}>
			<Logo />
			<div className={clsx(styles.links)}>{navLinks}</div>
			<div className={styles.group_right}>
				<ContactButton className={styles.contact_button} />
				<LanguageButton />
				<div className={clsx(styles.menu_wrapper)}>
					<Button className={styles.menu_button} onClick={handleOpen}>
						<Menu className={styles.menu_button_icon} />
					</Button>
					<Sheet isShown={isNavModalShown} className={styles.nav_modal}>
						<div className={styles.nav_modal_content}>
							<div className={styles.nav_modal_header}>
								<Button
									className={styles.close_menu_button}
									onClick={handleClose}
								>
									<Cross className={styles.close_menu_button_icon} />
								</Button>
							</div>
							<div className={styles.modal_links}>{navLinks}</div>
							<button onClick={exportTranslations}>export</button>
						</div>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
