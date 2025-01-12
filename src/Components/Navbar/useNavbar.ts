import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menuItems } from './constants';
import { getNavItem } from './renders';
import { useUnit } from 'effector-react';
import { $settings } from '../../Model/settings/state';
import { scrollIntoView } from '../../Utils/scrollIntoView';

function useNavbar() {
	const { language } = useUnit($settings);

	const [isNavModalShown, setIsNavModalShown] = useState<boolean>(false);

	const location = useLocation();

	const navLinks: JSX.Element[] = useMemo(
		() =>
			menuItems.map((item) => {
				const isActive: boolean = location.hash === `#${item}`;
				const onClick = () => {
					setIsNavModalShown(false);
					if (!isActive) {
						scrollIntoView(item);
					}
				};

				return getNavItem({ item, isActive, language, onClick });
			}),
		[location.hash, language],
	);

	const handleOpen = () => {
		setIsNavModalShown(true);
	};

	const handleClose = () => {
		setIsNavModalShown(false);
	};

	return { navLinks, isNavModalShown, handleOpen, handleClose };
}

export default useNavbar;
