import clsx from 'clsx';
import { LogoProps } from './types';

import styles from './Logo.module.css';
import logo from '../../Assets/logo_3.png';
import { NavLink } from 'react-router-dom';
import { ELEMENT_IDS } from '../../Shared/constants';

function Logo({ className, style }: LogoProps) {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<NavLink
			className={clsx(styles.logo, className)}
			id={ELEMENT_IDS.Logo}
			to="/"
			key="home"
			style={style}
			onClick={handleClick}
		>
			<img src={logo} className={styles.icon} alt="logo" />
		</NavLink>
	);
}

export default Logo;
