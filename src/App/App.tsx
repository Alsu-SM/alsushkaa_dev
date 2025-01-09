import clsx from 'clsx';

import { AppProps } from './types';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './App.module.css';
import Navbar from '../Components/Navbar';
import { menuItems } from '../Components/Navbar/constants';
import { Path } from '../Components/Navbar/types';
import { isScrolledIntoView } from '../Utils/checkIsScrollIntoView';
import { useEffect } from 'react';

function App({ className, style }: AppProps) {
	const navigate = useNavigate();

	const handleScroll = () => {
		menuItems.forEach((menuItem: Path) => {
			if (isScrolledIntoView(menuItem)) {
				navigate(`#${menuItem}`);
			}
		});

		if (window.scrollY === 0) {
			navigate(`/`);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
