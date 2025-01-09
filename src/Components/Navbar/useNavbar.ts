import { useMemo } from 'react';
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
				const onClick = () => {
					if (!isActive) {
						scrollIntoView(item);
					}
				};

				return getNavItem({ item, isActive, language, onClick });
			}),
		[location.hash, language],
	);

	return { navLinks };
}

export default useNavbar;
