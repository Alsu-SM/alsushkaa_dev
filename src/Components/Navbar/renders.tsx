import { NavLink } from 'react-router-dom';
import { GetNavItemParams } from './types';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import getTranslation from '../../Shared/getTranslation';
import { TRANSLATION_KEYS } from '../../Shared/constants';

export function getNavItem({ item, isActive, language }: GetNavItemParams) {
	const path = `#${item}`;
	const title = getTranslation(`link-${item}` as TRANSLATION_KEYS, language);

	return (
		<NavLink
			id={`nav_link_${item}`}
			to={path}
			key={path}
			className={clsx(styles.link, {
				[styles.link_active]: isActive,
			})}
		>
			{title}
		</NavLink>
	);
}
