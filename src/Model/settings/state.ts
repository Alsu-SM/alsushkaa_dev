import { createStore } from 'effector';
import { Settings } from './types';
import { SETTINGS_DEFAULT } from './constants';
import { restoreSettingsEvent, toggleLanguageEvent } from './events/events';
import {
	restoreSettingsEventHandler,
	toggleLanguageEventHandler,
} from './events/eventHandlers';

export const $settings = createStore<Settings>(SETTINGS_DEFAULT)
	.on(toggleLanguageEvent, toggleLanguageEventHandler)
	.on(restoreSettingsEvent, restoreSettingsEventHandler);
