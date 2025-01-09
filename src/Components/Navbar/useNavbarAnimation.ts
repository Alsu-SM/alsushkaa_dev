import { useGSAP } from '@gsap/react';
import { menuItems } from './constants';
import gsap from 'gsap';
import { ELEMENT_IDS } from '../../Shared/constants';

function useNavbarAnimation() {
	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { duration: 0.3 } });

		for (let path of menuItems) {
			const pathId = `#nav_link_${path}`;
			tl.fromTo(pathId, { y: '5', opacity: 0 }, { y: 0, opacity: 1 });
		}
		tl.fromTo(
			`#${ELEMENT_IDS.Logo}`,
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1 },
		);
		tl.fromTo(
			`#${ELEMENT_IDS.ContactMe}`,
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1 },
		);
		tl.fromTo(
			`#${ELEMENT_IDS.LanguageButton}`,
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1 },
		);
	}, []);
}

export default useNavbarAnimation;
