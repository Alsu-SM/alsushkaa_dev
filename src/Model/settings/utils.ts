import { SETTINGS_LANGUAGE_STORAGE_KEY } from './constants';
import { Language, Settings } from './types';

export function storeSettings(settings: Settings) {
	localStorage.setItem(SETTINGS_LANGUAGE_STORAGE_KEY, settings.language);
}

export function restoreSettings(): Settings {
	const storedLanguage = localStorage.getItem(SETTINGS_LANGUAGE_STORAGE_KEY);
	const language = storedLanguage === Language.RU ? Language.RU : Language.EN;

	return { language };
}
