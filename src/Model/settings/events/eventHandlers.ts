import { Language, Settings } from '../types';
import { restoreSettings, storeSettings } from '../utils';

export function toggleLanguageEventHandler({
	language,
	...state
}: Settings): Settings {
	const newLanguage = language === Language.EN ? Language.RU : Language.EN;
	const newSettings = { ...state, language: newLanguage };

	storeSettings(newSettings);

	return { ...newSettings };
}

export function restoreSettingsEventHandler(_: Settings): Settings {
	const settings = restoreSettings();

	return { ...settings };
}
