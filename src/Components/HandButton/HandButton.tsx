import clsx from 'clsx';
import { HandButtonProps } from './types';
import hand from '../../Assets/hand.png';

import styles from './HandButton.module.css';
import { ELEMENT_IDS } from '../../Shared/constants';
import { scrollIntoView } from '../../Utils/scrollIntoView';

function HandButton({ path, className, style }: HandButtonProps) {
	const handleClick = () => {
		scrollIntoView(path);
	};
	return (
		<button
			className={clsx(styles.hand, className)}
			id={ELEMENT_IDS.IntroHand}
			key={path}
			style={style}
			onClick={handleClick}
		>
			<img src={hand} alt="hand" className={styles.hand_icon} />
		</button>
	);
}

export default HandButton;
