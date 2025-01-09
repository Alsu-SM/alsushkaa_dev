import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { menuItems } from './constants';
import { getNavItem } from './renders';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { scrollIntoView } from '../../Utils/scrollIntoView';

function useNavbar() {
	const { language } = useUnit($settings);

	const location = useLocation();

	const navLinks: JSX.Element[] = useMemo(
		() =>
			menuItems.map((item) => {
				const isActive: boolean = location.hash === `#${item}`;

				return getNavItem({ item, isActive, language });
			}),
		[location.hash, language],
	);

	useEffect(() => {
		const path = menuItems.find((item) => location.hash === `#${item}`);

		if (path) {
			scrollIntoView(path);
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location.hash]);

	return { navLinks };
}

export default useNavbar;
