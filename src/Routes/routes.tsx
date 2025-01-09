import PageHome from '../Pages/PageHome';
import HomeLoader from '../Pages/PageHome/loader.router';
import { RouteItem, RoutePath } from './types';

const routes: RouteItem[] = [
	{
		index: true,
		displayName: '',
		key: RoutePath.Home,
		loader: HomeLoader,
		element: <PageHome />,
	},
];

export default routes;
