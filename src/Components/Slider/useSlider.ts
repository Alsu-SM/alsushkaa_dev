import { useEffect, useRef, useState } from 'react';
import { $settings } from '../../Model/settings/state';
import { useUnit } from 'effector-react';
import { MAX_SECONDS } from './constants';

function useSlider(count: number) {
	const [currentIndex, setCurrentIndex] = useState<number>(1);
	const [currentSeconds, setCurrentSeconds] = useState<number>(0);

	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);

	const { language } = useUnit($settings);

	const handleIncreaseIndex = () => {
		setCurrentIndex((currentIndex) => {
			const newIndex = (currentIndex + 1) % count;
			return newIndex;
		});
		setCurrentSeconds(0);
	};
	const handleDecreaseIndex = () => {
		setCurrentIndex((currentIndex) => {
			const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;
			return newIndex;
		});
		setCurrentSeconds(0);
	};

	const handleIncreaseSeconds = () => {
		setCurrentSeconds((currentSeconds) => {
			const newSeconds = (currentSeconds + 50) % (MAX_SECONDS + 1);
			if (newSeconds < currentSeconds) {
				handleIncreaseIndex();
			}

			return newSeconds;
		});
	};

	const animateTextChange = () => {
		if (!contentRef.current) {
			return;
		}
	};

	const handleMouseEnter = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	const handleMouseLeave = () => {
		intervalRef.current = setInterval(handleIncreaseSeconds, 50);
	};

	const handlePointClick = (index: number) => {
		setCurrentIndex(index);
		setCurrentSeconds(0);
	};

	// useEffect(() => {
	// 	intervalRef.current = setInterval(handleIncreaseSeconds, 50);

	// 	return () => {
	// 		if (intervalRef.current) {
	// 			clearInterval(intervalRef.current);
	// 		}
	// 	};
	// }, []);

	useEffect(() => {
		animateTextChange();
	}, [currentIndex]);

	return {
		currentIndex,
		currentSeconds,
		language,
		contentRef,
		handleMouseEnter,
		handleMouseLeave,
		handleIncreaseIndex,
		handleDecreaseIndex,
		handlePointClick,
	};
}

export default useSlider;
