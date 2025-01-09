import { Language } from '../Model/settings/types';
import { TRANSLATION_KEYS } from './constants';

export type DictionaryItem = Record<Language, string>;

const translateDictionary = new Map<TRANSLATION_KEYS, DictionaryItem>([
	[
		TRANSLATION_KEYS.LinkAbout,
		{ [Language.EN]: 'about', [Language.RU]: 'обо мне' },
	],
	[
		TRANSLATION_KEYS.LinkEducation,
		{ [Language.EN]: 'education', [Language.RU]: 'образование' },
	],
	[
		TRANSLATION_KEYS.LinkExperience,
		{ [Language.EN]: 'experience', [Language.RU]: 'опыт' },
	],
	[
		TRANSLATION_KEYS.LinkSkills,
		{ [Language.EN]: 'skills', [Language.RU]: 'навыки' },
	],
	[
		TRANSLATION_KEYS.LinkProjects,
		{ [Language.EN]: 'projects', [Language.RU]: 'проекты' },
	],
	[
		TRANSLATION_KEYS.LinkContacts,
		{ [Language.EN]: 'contacts', [Language.RU]: 'контакты' },
	],
	[
		TRANSLATION_KEYS.ContactMe,
		{ [Language.EN]: 'contact me', [Language.RU]: 'свяжитесь со мной' },
	],
	[
		TRANSLATION_KEYS.HiIAmName,
		{ [Language.EN]: "Hi I'm Alsu", [Language.RU]: 'Привет, я Алсу' },
	],
	[
		TRANSLATION_KEYS.FrontendDeveloper,
		{
			[Language.EN]: 'Frontend Developer',
			[Language.RU]: 'Фронтенд разработчик',
		},
	],
	[
		TRANSLATION_KEYS.Motivation,
		{
			[Language.EN]: `Complexity and beauty\n are my passion`,
			[Language.RU]: `Сложность и красота - \nмоя страсть`,
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_1,
		{
			[Language.EN]: `over 3 years of experience as a frontend developer`,
			[Language.RU]: 'более 3 лет опыта работы в фронтенд разработке',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_2,
		{
			[Language.EN]: `plenty of successfully launched projects`,
			[Language.RU]: 'множество успешно запущенных проектов',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_3,
		{
			[Language.EN]: `approved middle+ to senior grade assessment`,
			[Language.RU]: 'подтвержденный грейд между middle+ и senior',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_4,
		{
			[Language.EN]: `indescribable will to learn`,
			[Language.RU]: 'неописуемое стремление к развитию',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_5,
		{
			[Language.EN]: `tenacious mind and attention to details`,
			[Language.RU]: 'цепкий ум и внимание к деталям',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_6,
		{
			[Language.EN]: `responsibility and involvement`,
			[Language.RU]: 'ответственность и вовлеченность',
		},
	],
	[
		TRANSLATION_KEYS.AboutGreetingItem_1,
		{
			[Language.EN]: `Hi! My name is Alsu and I will help you get the most out of modern web application development`,
			[Language.RU]:
				'Привет! Меня зовут Алсу, и я помогу вам извлечь максимум из разработки современных веб-приложений',
		},
	],
	[
		TRANSLATION_KEYS.AboutGreetingItem_2,
		{
			[Language.EN]: `I equally enjoy building complex dashboards and cute landing pages <3`,
			[Language.RU]:
				'Мне одинаково нравится создавать сложные панели мониторинга и симпатичные целевые страницы <3',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_1,
		{
			[Language.EN]: `I've been working in the industry since 2020 and it's been amazing. During this time, I learned a lot and truly fell in love with the process of developing web interfaces`,
			[Language.RU]:
				'Я работаю в сфере с 2020 года, и это было потрясающе. За это время я многому научилась и искренне полюбила процесс разработки веб интерфейсов',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_2,
		{
			[Language.EN]: `My main areas of expertise were metallurgy, water supply and mining - serious stuff. I value the feeling of usefulness and belonging to an important cause`,
			[Language.RU]:
				'Моими основными областями деятельности были металлургия, водоснабжение и горнодобывающая промышленность — серьезные вещи. Я ценю чувство полезности и принадлежности к важному делу.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_3,
		{
			[Language.EN]: `And it’s a lot of data, analytics and challenging tasks, which maintains excitement and involvement and gives a feeling of satisfaction after solving another difficult problem.`,
			[Language.RU]:
				'И это много данных, аналитики и сложных задач, что поддерживает азарт и вовлеченность и дарит чувство удовлетворения после решения очередной непростой проблемы',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_4,
		{
			[Language.EN]: `To further explore, I have created several pet projects and am currently moving forward with my development roadmap. Every day brings new opportunities to learn something new and I love it
`,
			[Language.RU]:
				'Для дальнейшего изучения я создала несколько пет проектов и в настоящее время продвигаюсь по своей дорожной карте разработки. Каждый день дарит новые возможности узнать что-то новое и мне это нравится',
		},
	],
	[
		TRANSLATION_KEYS.AboutStandard,
		{
			[Language.EN]: `I make sure my code is clean and an image \nI create is pleasing and accessible`,
			[Language.RU]: `Я слежу за тем, чтобы мой код был чистым, \nа создаваемый мной визуал — приятным и доступным.`,
		},
	],
]);

function getTranslation(key: TRANSLATION_KEYS, language: Language): string {
	return translateDictionary.get(key)?.[language] || key;
}

export default getTranslation;
