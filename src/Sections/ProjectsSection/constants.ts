import { ProjectItem } from './types';

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
};
