import { useState } from 'react';
import { $settings } from '../../Model/settings/state';
import { useUnit } from 'effector-react';

function useSlider() {
	const [currentIndex, setCurrentIndex] = useState<number>(1);

	const { language } = useUnit($settings);

	return { currentIndex, language };
}

export default useSlider;
