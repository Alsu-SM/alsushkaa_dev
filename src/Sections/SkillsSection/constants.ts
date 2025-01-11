import { SkillGroup } from './types';

export const technicalSkillGroups: SkillGroup[] = [
	{
		title: 'Layout, Logic, Style',
		items: [
			'Javascript, Typescript, React',
			'HTML5, CSS3, SCSS, styled components, CSS modules',
			'Mobile-First, Desktop-First approaches',
		],
	},
	{
		title: 'State Management',
		items: [
			'Effector, Effector-React',
			'Axios, Fetch, XMLHttpRequest, Remote Procedure Call',
			'React-Redux, Redux-Toolkit, Redux-Saga, Redux-Thunk',
			'WebSocket, Stomp.js',
			'Keycloak JS, Keycloak custom theme, client oAuth2 call',
		],
	},
	{
		title: 'Web-API',
		items: [
			'Online / offline state',
			'Background Tasks API',
			'USB Devices API, Bluetooth API, NFC API',
			'Barcode Detector API',
			'IndexedDB API',
		],
	},
	{
		title: 'Architectural Knowledge',
		items: ['Design Patterns', 'Model View Controller Patterns'],
	},
	{
		title: 'Miscellaneous',
		items: [
			'React-XArrows, React-Beautiful-DND, React-Draggable',
			'Echarts, HighCharts',
			'Figma, Photoshop',
			'git, GitLab, GitHub',
			'Agile, Scrum & Kanban workflows',
		],
	},
];

export const softSkillsGroups: SkillGroup[] = [
	{
		items: [
			'Desire to learn and grow',
			'Team work',
			'Responsibility & Pro-activity',
			'Time Management',
			'Critical thinking',
			'Emotional intelligence',
			'Adaptability',
		],
	},
];
export const languageGroups: SkillGroup[] = [
	{
		items: [
			'Russian — native',
			'English — C1 certified, ~B2 actual',
			'German  — C1 certified, ~A2-B1 actual',
		],
	},
];
