import clsx from 'clsx';
import { HandButtonProps } from './types';
import hand from '../../Assets/hand.png';

import styles from './HandButton.module.css';
import { ELEMENT_IDS } from '../../Shared/constants';
import { NavLink } from 'react-router-dom';

function HandButton({ path, className, style }: HandButtonProps) {
	return (
		<NavLink
			className={clsx(styles.hand, className)}
			id={ELEMENT_IDS.IntroHand}
			to={`#${path}`}
			key={path}
			style={style}
		>
			<img src={hand} alt="hand" className={styles.hand_icon} />
		</NavLink>
	);
}

export default HandButton;
