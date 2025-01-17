import { Language } from '../Model/settings/types';
import { TRANSLATION_KEYS } from './constants';

export type DictionaryItem = Record<Language, string>;

export const translateDictionary = new Map<TRANSLATION_KEYS, DictionaryItem>([
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
		{ [Language.EN]: 'contact me', [Language.RU]: 'связаться' },
	],
	[
		TRANSLATION_KEYS.IntroHiIAmName,
		{ [Language.EN]: "Hi I'm Alsu", [Language.RU]: 'Привет, я Алсу' },
	],
	[
		TRANSLATION_KEYS.IntroFrontendDeveloper,
		{
			[Language.EN]: 'Frontend Developer',
			[Language.RU]: 'Фронтенд разработчик',
		},
	],
	[
		TRANSLATION_KEYS.IntroMotivation,
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
			[Language.EN]: `Hi! My name is Alsu and I will help you get \nthe most out of modern web application \ndevelopment`,
			[Language.RU]:
				'Привет! Меня зовут Алсу, и я помогу вам извлечь максимум из разработки современных веб-приложений',
		},
	],
	[
		TRANSLATION_KEYS.AboutGreetingItem_2,
		{
			[Language.EN]: `I equally enjoy building complex \ndashboards and cute landing pages <3`,
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
		TRANSLATION_KEYS.AboutDescriptionItem_1_short,
		{
			[Language.EN]: `I've been working in the industry since 2020 and it's been amazing`,
			[Language.RU]:
				'Я работаю в сфере с 2020 года, и это было потрясающе. За это время я многому научилась и искренне полюбила процесс разработки веб интерфейсов',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_2_short,
		{
			[Language.EN]: `My main areas of expertise were metallurgy, water supply and mining.`,
			[Language.RU]:
				'Моими основными областями деятельности были металлургия, водоснабжение и горнодобывающая промышленность — серьезные вещи. Я ценю чувство полезности и принадлежности к важному делу.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_3_short,
		{
			[Language.EN]: ` I value the feeling of usefulness and belonging to an important cause`,
			[Language.RU]:
				'И это много данных, аналитики и сложных задач, что поддерживает азарт и вовлеченность и дарит чувство удовлетворения после решения очередной непростой проблемы',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_4_short,
		{
			[Language.EN]: `Every day brings new opportunities to learn something new and I love it
`,
			[Language.RU]:
				'Для дальнейшего изучения я создала несколько пет проектов и в настоящее время продвигаюсь по своей дорожной карте разработки. Каждый день дарит новые возможности узнать что-то новое и мне это нравится',
		},
	],
	[
		TRANSLATION_KEYS.AboutStandard,
		{
			[Language.EN]: `I make sure my code is clean and an image I create is pleasing and accessible`,
			[Language.RU]: `Я слежу за тем, чтобы мой код был чистым, а создаваемый мной визуал — приятным и доступным.`,
		},
	],
	[
		TRANSLATION_KEYS.EducationYears_1,
		{
			[Language.EN]: `2018 — 2019`,
			[Language.RU]: `2018 — 2019`,
		},
	],
	[
		TRANSLATION_KEYS.EducationYears_2,
		{
			[Language.EN]: `2019 — 2023`,
			[Language.RU]: `2019 — 2023`,
		},
	],
	[
		TRANSLATION_KEYS.EducationYears_3,
		{
			[Language.EN]: `2023 — ∞`,
			[Language.RU]: `2023 — ∞`,
		},
	],
	[
		TRANSLATION_KEYS.EducationTitle_1,
		{
			[Language.EN]: `Technical University of Dortmund, Germany`,
			[Language.RU]: `Technical University of Dortmund, Germany`,
		},
	],
	[
		TRANSLATION_KEYS.EducationTitle_2,
		{
			[Language.EN]: `The National Research State University of Nizhny Novgorod, Russia`,
			[Language.RU]: `The National Research State University of Nizhny Novgorod, Russia`,
		},
	],
	[
		TRANSLATION_KEYS.EducationTitle_3,
		{
			[Language.EN]: `life journey`,
			[Language.RU]: `life journey`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_1,
		{
			[Language.EN]: `Faculty of Electrical Engineering and Information Technology: Information and Communication Technologies`,
			[Language.RU]: `Faculty of Electrical Engineering and Information Technology: Information and Communication Technologies`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_2,
		{
			[Language.EN]: `Institute of Information Technology, Mathematics and Mechanics: Applied Informatics`,
			[Language.RU]: `Institute of Information Technology, Mathematics and Mechanics: Applied Informatics`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_3_1,
		{
			[Language.EN]: `I continue to explore this world, try new things, pick up modern technologies and hone old skills`,
			[Language.RU]: `I continue to explore this world, try new things, pick up modern technologies and hone old skills`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_3_2,
		{
			[Language.EN]: `In this field you have no choice but to learn something new every day and I adore it`,
			[Language.RU]: `In this field you have no choice but to learn something new every day and I adore it`,
		},
	],
	[
		TRANSLATION_KEYS.EducationCoreSkillsTitle,
		{
			[Language.EN]: `Core skills:`,
			[Language.RU]: `Core skills:`,
		},
	],
	[
		TRANSLATION_KEYS.EducationCoreSkills_1,
		{
			[Language.EN]: `data structures, object-oriented programming, electrostatics, electrodynamics, higher mathematics, spoken and written German`,
			[Language.RU]: `data structures, object-oriented programming, electrostatics, electrodynamics, higher mathematics, spoken and written German`,
		},
	],
	[
		TRANSLATION_KEYS.EducationCoreSkills_2,
		{
			[Language.EN]: `design patterns, data structures, object-oriented programming, basics and depths of various programming languages including C, C# and JS, higher mathematics, spoken and written English.`,
			[Language.RU]: `design patterns, data structures, object-oriented programming, basics and depths of various programming languages including C, C# and JS, higher mathematics, spoken and written English.`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1,
		{
			[Language.EN]: `Technical skills`,
			[Language.RU]: `Technical skills`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2,
		{
			[Language.EN]: `Soft skills`,
			[Language.RU]: `Soft skills`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3,
		{
			[Language.EN]: `Languages`,
			[Language.RU]: `Languages`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_1,
		{
			[Language.EN]: `Layout, Logic, Style`,
			[Language.RU]: `Layout, Logic, Style`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_2,
		{
			[Language.EN]: `State Management`,
			[Language.RU]: `State Management`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_3,
		{
			[Language.EN]: `Web-API`,
			[Language.RU]: `Web-API`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_4,
		{
			[Language.EN]: `Architectural Knowledge`,
			[Language.RU]: `Architectural Knowledge`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_5,
		{
			[Language.EN]: `Miscellaneous`,
			[Language.RU]: `Miscellaneous`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_1_Item_1,
		{
			[Language.EN]: `Javascript, Typescript, React`,
			[Language.RU]: `Javascript, Typescript, React`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_1_Item_2,
		{
			[Language.EN]: `HTML5, CSS3, SCSS, styled components, CSS modules`,
			[Language.RU]: `HTML5, CSS3, SCSS, styled components, CSS modules`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_1_Item_3,
		{
			[Language.EN]: `Mobile-First, Desktop-First approaches`,
			[Language.RU]: `Mobile-First, Desktop-First approaches`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_2_Item_1,
		{
			[Language.EN]: `Effector, Effector-React`,
			[Language.RU]: `Effector, Effector-React`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_2_Item_2,
		{
			[Language.EN]: `Axios, Fetch, XMLHttpRequest, Remote Procedure Call`,
			[Language.RU]: `Axios, Fetch, XMLHttpRequest, Remote Procedure Call`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_2_Item_3,
		{
			[Language.EN]: `React-Redux, Redux-Toolkit, Redux-Saga, Redux-Thunk`,
			[Language.RU]: `React-Redux, Redux-Toolkit, Redux-Saga, Redux-Thunk`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_2_Item_4,
		{
			[Language.EN]: `WebSocket, Stomp.js`,
			[Language.RU]: `WebSocket, Stomp.js`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_2_Item_5,
		{
			[Language.EN]: `Keycloak JS, Keycloak custom theme, client oAuth2 call`,
			[Language.RU]: `Keycloak JS, Keycloak custom theme, client oAuth2 call`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_3_Item_1,
		{
			[Language.EN]: `Online / offline state`,
			[Language.RU]: `Online / offline state`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_3_Item_2,
		{
			[Language.EN]: `Background Tasks API`,
			[Language.RU]: `Background Tasks API`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_3_Item_3,
		{
			[Language.EN]: `USB Devices API, Bluetooth API, NFC API`,
			[Language.RU]: `USB Devices API, Bluetooth API, NFC API`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_3_Item_4,
		{
			[Language.EN]: `Barcode Detector API`,
			[Language.RU]: `Barcode Detector API`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_3_Item_5,
		{
			[Language.EN]: `IndexedDB API`,
			[Language.RU]: `IndexedDB API`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_4_Item_1,
		{
			[Language.EN]: `Design Patterns`,
			[Language.RU]: `Design Patterns`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_4_Item_2,
		{
			[Language.EN]: `Model View Controller Patterns`,
			[Language.RU]: `Model View Controller Patterns`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_5_Item_1,
		{
			[Language.EN]: `React-XArrows, React-Beautiful-DND, React-Draggable`,
			[Language.RU]: `React-XArrows, React-Beautiful-DND, React-Draggable`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_5_Item_2,
		{
			[Language.EN]: `Echarts, HighCharts`,
			[Language.RU]: `Echarts, HighCharts`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_5_Item_3,
		{
			[Language.EN]: `Figma, Photoshop`,
			[Language.RU]: `Figma, Photoshop`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_5_Item_4,
		{
			[Language.EN]: `git, GitLab, GitHub`,
			[Language.RU]: `git, GitLab, GitHub`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_5_Item_5,
		{
			[Language.EN]: `Agile, Scrum & Kanban workflows`,
			[Language.RU]: `Agile, Scrum & Kanban workflows`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_1,
		{
			[Language.EN]: `Desire to learn and grow`,
			[Language.RU]: `Desire to learn and grow`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_2,
		{
			[Language.EN]: `Team work`,
			[Language.RU]: `Team work`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_3,
		{
			[Language.EN]: `Responsibility & Pro-activity`,
			[Language.RU]: `Responsibility & Pro-activity`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_4,
		{
			[Language.EN]: `Time Management`,
			[Language.RU]: `Time Management`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_5,
		{
			[Language.EN]: `Critical thinking`,
			[Language.RU]: `Critical thinking`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_6,
		{
			[Language.EN]: `Emotional intelligence`,
			[Language.RU]: `Emotional intelligence`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_7,
		{
			[Language.EN]: `Adaptability`,
			[Language.RU]: `Adaptability`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3_Item_1,
		{
			[Language.EN]: `Russian — native`,
			[Language.RU]: `Russian — native`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3_Item_2,
		{
			[Language.EN]: `English — C1 certified, ~B2 actual`,
			[Language.RU]: `English — C1 certified, ~B2 actual`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3_Item_3,
		{
			[Language.EN]: `German  — C1 certified, ~A2-B1 actual`,
			[Language.RU]: `German  — C1 certified, ~A2-B1 actual`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsMessage,
		{
			[Language.EN]: `I am a fast and diligent learner and any skill you find missing in this page is an opportunity for me to gain new knowledge`,
			[Language.RU]: `I am a fast and diligent learner and any skill you find missing in this page is an opportunity for me to gain new knowledge`,
		},
	],
]);

function getTranslation(key: TRANSLATION_KEYS, language: Language): string {
	return translateDictionary.get(key)?.[language] || key;
}

export default getTranslation;
