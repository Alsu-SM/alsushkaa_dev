import clsx from 'clsx';
import { HandButtonProps } from './types';
import hand from '../../Assets/hand.png';

import styles from './HandButton.module.css';
import { ELEMENT_IDS } from '../../Shared/constants';
import { NavLink } from 'react-router-dom';
import { scrollIntoView } from '../../Utils/scrollIntoView';
import { Path } from '../Navbar/types';

function HandButton({ path, className, style }: HandButtonProps) {
	const formattedPath = path === Path.Home ? '/' : `#${path}`;

	const handleClick = () => {
		scrollIntoView(path);
	};
	return (
		<NavLink
			className={clsx(styles.hand, className)}
			id={ELEMENT_IDS.IntroHand}
			to={formattedPath}
			key={path}
			style={style}
			onClick={handleClick}
		>
			<img src={hand} alt="hand" className={styles.hand_icon} />
		</NavLink>
	);
}

export default HandButton;
