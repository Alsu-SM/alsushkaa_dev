import { ProjectItem } from './types';
import p1_result from '../../Assets/p1_result.png';
import p2_result from '../../Assets/p2_result.gif';
import p3_result from '../../Assets/p3_result.gif';

export const PWA_PROJECT: ProjectItem = {
	title: 'PWA Pilot',
	description:
		'The goal was to reveal the main capabilities of Powerful Web Applications in one project',
	subDescription: 'Simple Mobile-First design, powerful functionality',
	technologies: [
		{
			title: 'Barcode Web API',
			description:
				'This module included access to the camera, use of a flashlight for easier scanning, display of the current video stream, and, finally, barcode scanning and decoding',
		},
		{
			title: 'Online/Offline control',
			description: 'Monitoring network connection status',
		},

		{
			title: 'Background Tasks Web API',
			description:
				'The API was used to add a random row entry to indexedDB every 5 seconds in the background. We have provided the ability to pause and resume background work, and also added a database clearing function',
		},
		{
			title: 'NFC Web API',
			description:
				'This module provided the ability to scan and rewrite data of special NFC tags',
		},
		{
			title: 'Bluetooth Web API',
			description:
				'Displayed a list of Bluetooth devices connected to the web page and prompted users to connect/disconnect the device they needed.',
		},
		{
			title: 'USB web API',
			description:
				'This module had similar functionality and worked with all devices connected to the page via USB, including a microphone, camera, keyboard, etc.',
		},
		{
			title: 'Push notifications',
			description:
				'We configured a server for push notifications and connected a service-worker that manages subscriptions to notifications stream',
		},
		{
			title: 'IndexedDB API',
			description:
				'The application stored half a million records in indexedDB to demonstrate the speed of searching by key and by value across a large amount of data.',
		},
	],
	result:
		'The launch of the pilot was successful and it was further developed into  a full-fledged application for tracking the movement of goods from the moment of declaration of need to actual use in production',
	imageResult: p1_result,
};

export const PUFF_TRACKER_PROJECT: ProjectItem = {
	title: 'Puff tracker',
	description:
		'An application that would allow user to monitor the dynamics of nicotine consumption and include a program for slowly quitting',
	subDescription:
		'Track only mode or increase intervals between smoke breaks mode with flexible settings and a pleasant interface',
	technologies: [
		{
			title: 'Powerful Web Application',
			description:
				'Correct configuration of the manifest allowed us to install the web page as an application, cache the necessary data and use puff tracker without the Internet',
		},
		{
			title: 'Echarts',
			description:
				'Aesthetic graphs showing the dynamics of nicotine consumption and changes in the frequency of smoking breaks',
		},
		{
			title: 'Effector',
			description:
				'State management divided into a user interface model and a smoking statistics data model',
		},
		{
			title: 'LocalStorage',
			description:
				'A simple but effective tool for discreetly saving and restoring user data within one device',
		},
		{
			title: 'Backup System',
			description:
				'Saving all necessary data on the user’s device in a text file has opened up the opportunity to recover deleted data or transfer it to another device.\nValidation during parsing made it possible to secure the data recovery process',
		},
		{
			title: 'Bug report via email.js',
			description:
				'If problems arise, the user has the opportunity to call the Bug report modal window, describe the issue and email it to the developer',
		},
		{
			title: 'Screenshots for bug report via html-to-image',
			description:
				'When opening a Bug report modal, the application takes a snapshot of the active page, compresses it and sends it along with the entered data by email to the developer',
		},
		{
			title: 'Mobile Datepicker',
			description:
				'Aesthetic styling of the mobile datepicker component made it possible to obtain consistent functionality of a native component with beautiful styles',
		},
	],
	result:
		'I brought the application to a stable state, created a backlog and began using it with great pleasure. At the moment, nicotine consumption has decreased by half and this is just the beginning',
	imageResult: p2_result,
};
export const GRADIENT_PICKER_PROJECT: ProjectItem = {
	title: 'Gradient picker',
	description: 'Gradient generator with fine-tuning colors and positions. ',
	subDescription:
		'Ability to add gradients to favorites, copy CSS code and download the generated image',
	technologies: [
		{
			title: 'Effector',
			description:
				'State management divided into a current settings model and a data model for gradients',
		},
		{
			title: '@uiw/react-color',
			description: 'Color wheel and color presets for easy gradient adjustment',
		},
		{
			title: 'Screenshots via html-to-image',
			description:
				'Ability to save the generated gradient in png format with css code at the bottom of the image',
		},
		{
			title: 'Clipboard api',
			description:
				'Copying the css code for the generated gradient to the clipboard by clicking on the button',
		},
	],
	result:
		'The project turned out cute and concise, I regularly use it in the development of pet projects, creating aesthetic gradients',
	imageResult: p3_result,
};
