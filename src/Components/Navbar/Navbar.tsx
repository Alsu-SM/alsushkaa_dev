import clsx from 'clsx';
import { NavbarProps } from './types';

import styles from './Navbar.module.css';
import useNavbar from './useNavbar';
import LanguageButton from '../LanguageButton';
import Logo from '../Logo';
import ContactButton from '../ContactButton';

function Navbar({ className, style }: NavbarProps) {
	const { navLinks } = useNavbar();

	return (
		<nav className={clsx(styles.root, styles.nav, className)} style={style}>
			<Logo />
			{navLinks}
			<div className={styles.group_right}>
				<ContactButton />
				<LanguageButton />
			</div>
		</nav>
	);
}

export default Navbar;
