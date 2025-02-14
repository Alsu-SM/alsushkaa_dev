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
			[Language.EN]: `numerous successfully launched projects`,
			[Language.RU]: 'множество успешно запущенных проектов',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_3,
		{
			[Language.EN]: `passed middle+ to senior level assessment`,
			[Language.RU]: 'подтвержденная оценка уровня middle+ и выше',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_4,
		{
			[Language.EN]: `insatiable desire to learn`,
			[Language.RU]: 'неутолимая жажда знаний',
		},
	],
	[
		TRANSLATION_KEYS.IntroFooterItem_5,
		{
			[Language.EN]: `sharp mind and attention to detail`,
			[Language.RU]: 'острый ум и внимание к деталям',
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
			[Language.EN]: `Hi! My name is Alsu, and I’ll help you get the most out of modern web application development.`,
			[Language.RU]:
				'Привет! Меня зовут Алсу, и я помогу вам получить максимум от современной веб-разработки.',
		},
	],
	[
		TRANSLATION_KEYS.AboutGreetingItem_2,
		{
			[Language.EN]: `I equally enjoy building complex dashboards and cute landing pages <3`,
			[Language.RU]:
				'Мне одинаково нравится создавать сложные дашборды и милые лендинги <3',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_1,
		{
			[Language.EN]: `I’ve been working in the industry since 2020, and it’s been incredible. During this time, I’ve learned so much and truly fell in love with developing web interfaces.`,
			[Language.RU]:
				'Я работаю в индустрии с 2020 года, и это было потрясающе. За это время я многому научилась и по-настоящему влюбилась в процесс разработки веб-интерфейсов.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_2,
		{
			[Language.EN]: `My main areas of expertise were metallurgy, water supply, and mining — serious fields. I value the sense of usefulness and contributing to something meaningful.`,
			[Language.RU]:
				'Моими основными областями деятельности были металлургия, водоснабжение и горное дело — серьезные сферы. Я ценю чувство полезности и причастности к важному делу.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_3,
		{
			[Language.EN]: `It involves a lot of data, analytics, and challenging tasks, which keep things exciting and engaging, and provide a sense of satisfaction after solving tough problems.`,
			[Language.RU]:
				'Это включает много данных, аналитики и сложных задач, что поддерживает интерес и вовлеченность, а также дает чувство удовлетворения после решения очередной трудной проблемы.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_4,
		{
			[Language.EN]: `To explore further, I’ve created several pet projects and am currently following my development roadmap. Every day brings new opportunities to learn, and I love it.`,
			[Language.RU]:
				'Чтобы углубить знания, я создала несколько pet-проектов и сейчас двигаюсь по своему roadmap развития. Каждый день приносит новые возможности учиться, и мне это нравится.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_1_short,
		{
			[Language.EN]: `I’ve been working in the industry since 2020, and it’s been incredible.`,
			[Language.RU]:
				'Я работаю в индустрии с 2020 года, и это было потрясающе.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_2_short,
		{
			[Language.EN]: `My main areas of expertise were metallurgy, water supply, and mining.`,
			[Language.RU]:
				'Моими основными областями были металлургия, водоснабжение и горное дело.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_3_short,
		{
			[Language.EN]: `I value the sense of usefulness and contributing to something meaningful.`,
			[Language.RU]: 'Я ценю чувство полезности и причастности к важному делу.',
		},
	],
	[
		TRANSLATION_KEYS.AboutDescriptionItem_4_short,
		{
			[Language.EN]: `Every day brings new opportunities to learn, and I love it.`,
			[Language.RU]:
				'Каждый день приносит новые возможности учиться, и мне это нравится.',
		},
	],
	[
		TRANSLATION_KEYS.AboutStandard,
		{
			[Language.EN]: `I ensure my code is clean and the visuals I create are appealing and accessible.`,
			[Language.RU]: `Я слежу за тем, чтобы мой код был чистым, а создаваемые мной изображения — приятными и доступными.`,
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
			[Language.RU]: `Технический университет Дортмунда, Германия`,
		},
	],
	[
		TRANSLATION_KEYS.EducationTitle_2,
		{
			[Language.EN]: `The National Research State University of Nizhny Novgorod, Russia`,
			[Language.RU]: `Национальный исследовательский государственный университет Нижнего Новгорода, Россия`,
		},
	],
	[
		TRANSLATION_KEYS.EducationTitle_3,
		{
			[Language.EN]: `life journey`,
			[Language.RU]: `жизненный путь`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_1,
		{
			[Language.EN]: `Faculty of Electrical Engineering and Information Technology: Information and Communication Technologies`,
			[Language.RU]: `Факультет электротехники и информационных технологий: Информационные и коммуникационные технологии`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_2,
		{
			[Language.EN]: `Institute of Information Technology, Mathematics and Mechanics: Applied Informatics`,
			[Language.RU]: `Институт информационных технологий, математики и механики: Прикладная информатика`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_3_1,
		{
			[Language.EN]: `I continue to explore the world, try new things, adopt modern technologies, and refine old skills`,
			[Language.RU]: `Я продолжаю исследовать мир, пробовать новое, осваивать современные технологии и совершенствовать старые навыки`,
		},
	],
	[
		TRANSLATION_KEYS.EducationDescription_3_2,
		{
			[Language.EN]: `In this field, you have no choice but to learn something new every day, and I love it`,
			[Language.RU]: `В этой сфере у вас нет выбора, кроме как учиться чему-то новому каждый день, и мне это нравится`,
		},
	],
	[
		TRANSLATION_KEYS.EducationCoreSkillsTitle,
		{
			[Language.EN]: `Core skills:`,
			[Language.RU]: `Основные навыки:`,
		},
	],
	[
		TRANSLATION_KEYS.EducationCoreSkills_1,
		{
			[Language.EN]: `data structures, object-oriented programming, electrostatics, electrodynamics, higher mathematics, spoken and written German`,
			[Language.RU]: `структуры данных, объектно-ориентированное программирование, электростатика, электродинамика, высшая математика, устный и письменный немецкий`,
		},
	],
	[
		TRANSLATION_KEYS.EducationCoreSkills_2,
		{
			[Language.EN]: `design patterns, data structures, object-oriented programming, fundamentals and advanced concepts of various programming languages including C, C#, and JS, advanced mathematics, spoken and written English`,
			[Language.RU]: `шаблоны проектирования, структуры данных, объектно-ориентированное программирование, основы и углубленные знания различных языков программирования, включая C, C# и JS, высшая математика, устный и письменный английский`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceYears_1,
		{
			[Language.EN]: `summer 2023 — present`,
			[Language.RU]: `лето 2023 — настоящее время`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceYears_2,
		{
			[Language.EN]: `winter 2021 — summer 2023`,
			[Language.RU]: `зима 2021 — лето 2023`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceDescription_1,
		{
			[Language.EN]: `A place where I felt valued and had the freedom to grow. Numerous projects in mining, metallurgy, and management helped me progress. The skill matrix made the process even more fun and motivating.`,
			[Language.RU]: `Место, где я чувствовала себя ценной и имела возможность свободно развиваться. Множество проектов в области горного дела, металлургии и управления помогли мне двигаться вперед. Матрица навыков добавляла процессу больше интереса и мотивации.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceDescription_2,
		{
			[Language.EN]: `First steps into professional development and rapid growth thanks to extensive practice on projects in finance, water supply, and metallurgy.`,
			[Language.RU]: `Первые шаги в мир профессиональной разработки и быстрый рост благодаря большому количеству практики на проектах в области финансов, водоснабжения и металлургии.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility,
		{
			[Language.EN]: `My responsibilities included:`,
			[Language.RU]: `В мои обязанности входило:`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceGratitude,
		{
			[Language.EN]: `I’m grateful for this experience and everything I’ve learned over these years.`,
			[Language.RU]: `Я благодарна за этот опыт и за все, чему научилась за эти годы.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_1,
		{
			[Language.EN]: `Development in compliance with internal standards.`,
			[Language.RU]: `Разработка в соответствии с внутренними стандартами.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_2,
		{
			[Language.EN]: `Minimal use of external libraries: in-house solutions are preferred.`,
			[Language.RU]: `Минимальное использование внешних библиотек: предпочтение отдается собственным решениям.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_3,
		{
			[Language.EN]: `Development of the company’s UI kit.`,
			[Language.RU]: `Разработка UI-кита компании.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_4,
		{
			[Language.EN]: `Leading role in numerous projects, including top-priority ones.`,
			[Language.RU]: `Ведущая роль в большом количестве проектов, включая проекты высшего приоритета.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_5,
		{
			[Language.EN]: `Cross-reviews and code reviews. Refactoring.`,
			[Language.RU]: `Кросс-ревью и код-ревью. Рефакторинг.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_6,
		{
			[Language.EN]: `Reviewing layouts, clarifying questions with project analysts, and maintaining documentation.`,
			[Language.RU]: `Приемка макетов, проработка вопросов с аналитиками проекта, ведение документации.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_7,
		{
			[Language.EN]: `Learning new technologies and working with PWAs, WebSockets, and Web APIs.`,
			[Language.RU]: `Изучение новых технологий и работа с PWA, WebSockets и Web API.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_1_8,
		{
			[Language.EN]: `Solving new architectural challenges and optimizing systems handling large data volumes.`,
			[Language.RU]: `Решение новых архитектурных задач и оптимизация систем, работающих с большими объемами данных.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_2_1,
		{
			[Language.EN]: `Building new projects from scratch and maintaining existing ones.`,
			[Language.RU]: `Создание новых проектов с нуля и поддержка старых.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_2_2,
		{
			[Language.EN]: `Designing complex logic and creating layouts for beautiful landing pages.`,
			[Language.RU]: `Продумывание сложной логики и верстка красивых лендингов.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_2_3,
		{
			[Language.EN]: `Mastering new libraries and developing custom hooks, utilities, packages, and components.`,
			[Language.RU]: `Освоение новых библиотек и разработка вспомогательных кастомных хуков, утилит, пакетов и компонентов.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_2_4,
		{
			[Language.EN]: `Participating in cross-reviews and performing code reviews.`,
			[Language.RU]: `Участие в кросс-ревью и проведение код-ревью.`,
		},
	],
	[
		TRANSLATION_KEYS.ExperienceResponsibility_2_5,
		{
			[Language.EN]: `Leading the frontend development of a product in the water supply sector, listed in the Russian software registry.`,
			[Language.RU]: `Ведущая роль в создании фронтенд части продукта в сфере водоснабжения, включенного в реестр российского ПО.`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1,
		{
			[Language.EN]: `Technical skills`,
			[Language.RU]: `Технические навыки`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2,
		{
			[Language.EN]: `Soft skills`,
			[Language.RU]: `Мягкие навыки`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3,
		{
			[Language.EN]: `Languages`,
			[Language.RU]: `Языки`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_1,
		{
			[Language.EN]: `Layout, Logic, Style`,
			[Language.RU]: `Верстка, Логика, Стили`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_2,
		{
			[Language.EN]: `State Management`,
			[Language.RU]: `Управление состоянием`,
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
			[Language.RU]: `Знание архитектуры`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_GroupTitle_5,
		{
			[Language.EN]: `Miscellaneous`,
			[Language.RU]: `Разное`,
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
			[Language.RU]: `Подходы Mobile-First, Desktop-First`,
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
			[Language.RU]: `Онлайн / оффлайн состояние`,
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
			[Language.RU]: `Шаблоны проектирования`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_1_Group_4_Item_2,
		{
			[Language.EN]: `Model View Controller Patterns`,
			[Language.RU]: `Шаблоны Model-View-Controller`,
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
			[Language.RU]: `Методологии Agile, Scrum и Kanban`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_1,
		{
			[Language.EN]: `Desire to learn and grow`,
			[Language.RU]: `Желание учиться и развиваться`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_2,
		{
			[Language.EN]: `Teamwork`,
			[Language.RU]: `Командная работа`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_3,
		{
			[Language.EN]: `Responsibility and Proactivity`,
			[Language.RU]: `Ответственность и проактивность`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_4,
		{
			[Language.EN]: `Time Management`,
			[Language.RU]: `Тайм-менеджмент`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_5,
		{
			[Language.EN]: `Critical Thinking`,
			[Language.RU]: `Критическое мышление`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_6,
		{
			[Language.EN]: `Emotional Intelligence`,
			[Language.RU]: `Эмоциональный интеллект`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_2_Item_7,
		{
			[Language.EN]: `Adaptability`,
			[Language.RU]: `Адаптивность`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3_Item_1,
		{
			[Language.EN]: `Russian — native`,
			[Language.RU]: `Russian — родной`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3_Item_2,
		{
			[Language.EN]: `English — C1 certified, ~B2 in practice`,
			[Language.RU]: `Английский — сертификат C1, ~B2 на практике`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsType_3_Item_3,
		{
			[Language.EN]: `German  — C1 certified, ~A2-B1 in practice`,
			[Language.RU]: `Немецкий — сертификат C1, ~A2-B1 на практике`,
		},
	],
	[
		TRANSLATION_KEYS.SkillsMessage,
		{
			[Language.EN]: `I’m a quick and diligent learner, and any skill missing here is an opportunity for me to learn something new.`,
			[Language.RU]: `Я быстро и усердно учусь, и любой навык, отсутствующий на этой странице, — это возможность для меня получить новые знания.`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsTitle,
		{
			[Language.EN]: `Feel free to contact me if you’d like to collaborate <3`,
			[Language.RU]: `Свяжитесь со мной, если хотите работать вместе <3`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsDescription,
		{
			[Language.EN]: `I’m based in Nizhny Novgorod, Russia, and currently open to ~preferably remote~ full-time opportunities.`,
			[Language.RU]: `Я нахожусь в Нижнем Новгороде, Россия, и сейчас открыта для ~предпочтительно удаленных~ предложений о полной занятости.`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsFindMeOn,
		{
			[Language.EN]: `You can reach me on:`,
			[Language.RU]: `Вы можете найти меня здесь:`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsCallMe,
		{
			[Language.EN]: `Or simply call me`,
			[Language.RU]: `Или просто позвоните мне`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsCopyPhone,
		{
			[Language.EN]: `Copy phone number`,
			[Language.RU]: `Скопировать номер телефона`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsCopyEmail,
		{
			[Language.EN]: `Copy email address`,
			[Language.RU]: `Скопировать email`,
		},
	],
	[
		TRANSLATION_KEYS.ContactsDownloadResume,
		{
			[Language.EN]: `Download resume`,
			[Language.RU]: `Скачать резюме`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUsedTechnologies,
		{
			[Language.EN]: `Used technologies`,
			[Language.RU]: `Использованные технологии`,
		},
	],
	[
		TRANSLATION_KEYS.WorkProjects,
		{
			[Language.EN]: `Work projects`,
			[Language.RU]: `Рабочие проекты`,
		},
	],
	[
		TRANSLATION_KEYS.WorkProjectsDescription,
		{
			[Language.EN]: `Most work projects I participated in are under NDA, so I’ve prepared some study cases to give you an idea of their concepts.`,
			[Language.RU]: `Большинство рабочих проектов, в которых я участвовала, находятся под NDA, поэтому я подготовила несколько study кейсов, чтобы передать их основные идеи.`,
		},
	],
	[
		TRANSLATION_KEYS.PetProjects,
		{
			[Language.EN]: `Pet projects`,
			[Language.RU]: `Личные проекты`,
		},
	],
	[
		TRANSLATION_KEYS.PetProjectsDescription,
		{
			[Language.EN]: `I’m excited to share some of my favorite pet projects I worked on in my free time. It was enjoyable and helped me develop some unique skills.`,
			[Language.RU]: `Я рада представить несколько моих любимых личных проектов, сделанных в свободное время. Это было весело и помогло мне улучшить некоторые необычные навыки.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTitle,
		{
			[Language.EN]: `Puff tracker`,
			[Language.RU]: `Puff tracker`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerDescription,
		{
			[Language.EN]: `An app that lets users track nicotine consumption trends and includes a gradual quitting program.`,
			[Language.RU]: `Приложение, позволяющее пользователю отслеживать динамику потребления никотина и включающее программу постепенного отказа.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerSubDescription,
		{
			[Language.EN]: `Track-only mode or a mode to increase intervals between smoke breaks, with flexible settings and a user-friendly interface.`,
			[Language.RU]: `Режим трекера или режим увеличения интервалов между перекурами с гибкими настройками и приятным интерфейсом.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_1_Title,
		{
			[Language.EN]: `Powerful Web Application`,
			[Language.RU]: `Powerful Web Application`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_1_Description,
		{
			[Language.EN]: `Proper manifest configuration enabled the web page to be installed as an app, cache necessary data, and use the puff tracker offline.`,
			[Language.RU]: `Правильная настройка манифеста позволила установить веб-страницу как приложение, кэшировать необходимые данные и использовать трекер без интернета.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_2_Title,
		{
			[Language.EN]: `Echarts`,
			[Language.RU]: `Echarts`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_2_Description,
		{
			[Language.EN]: `Stylish graphs displaying nicotine consumption trends and changes in smoking break frequency.`,
			[Language.RU]: `Эстетичные графики, показывающие динамику потребления никотина и изменения частоты перекуров.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_3_Title,
		{
			[Language.EN]: `Effector`,
			[Language.RU]: `Effector`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_3_Description,
		{
			[Language.EN]: `State management split into a user interface model and a smoking statistics data model.`,
			[Language.RU]: `Управление состоянием разделено на модель пользовательского интерфейса и модель данных статистики курения.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_4_Title,
		{
			[Language.EN]: `LocalStorage`,
			[Language.RU]: `LocalStorage`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_4_Description,
		{
			[Language.EN]: `A simple yet effective tool for discreetly saving and restoring user data on a single device.`,
			[Language.RU]: `Простой, но эффективный инструмент для незаметного сохранения и восстановления пользовательских данных в рамках одного устройства.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_5_Title,
		{
			[Language.EN]: `Backup System`,
			[Language.RU]: `Система бэкапов`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_5_Description,
		{
			[Language.EN]: `Saving all necessary data in a text file on the user’s device allows for data recovery or transfer to another device. Validation during parsing ensures a secure recovery process.`,
			[Language.RU]: `Сохранение всех необходимых данных на устройстве пользователя в текстовом файле открыло возможность восстановления удаленных данных или их переноса на другое устройство. Валидация при парсинге обеспечила безопасность процесса восстановления данных.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_6_Title,
		{
			[Language.EN]: `Bug report via email.js`,
			[Language.RU]: `Баг репорт через email.js`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_6_Description,
		{
			[Language.EN]: `If issues occur, the user can open a bug report modal, describe the problem, and email it to the developer.`,
			[Language.RU]: `Если возникают проблемы, пользователь может вызвать модальное окно отчета об ошибке, описать проблему и отправить ее разработчику по электронной почте.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_7_Title,
		{
			[Language.EN]: `Screenshots for bug report via html-to-image`,
			[Language.RU]: `Скриншоты для баг репортов с html-to-image`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_7_Description,
		{
			[Language.EN]: `When the bug report modal is opened, the app captures a screenshot of the active page, compresses it, and sends it along with the entered data to the developer via email.`,
			[Language.RU]: `При открытии модального окна отчета об ошибке приложение делает снимок активной страницы, сжимает его и отправляет вместе с введенными данными разработчику по электронной почте.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_8_Title,
		{
			[Language.EN]: `Mobile Datepicker`,
			[Language.RU]: `Mobile Datepicker`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerTechnology_8_Description,
		{
			[Language.EN]: `Stylish design of the mobile datepicker component ensured consistent native functionality with an attractive look.`,
			[Language.RU]: `Эстетичное оформление мобильного компонента выбора даты позволило сохранить функциональность нативного компонента с красивым дизайном.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPuffTrackerResult,
		{
			[Language.EN]: `I stabilized the app, created a backlog, and started using it with great satisfaction. Currently, nicotine consumption has halved, and this is just the beginning.`,
			[Language.RU]: `Я привела приложение в стабильное состояние, создала бэклог и с удовольствием начала его использовать. На данный момент потребление никотина сократилось вдвое, и это только начало.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTitle,
		{
			[Language.EN]: `Gradient picker`,
			[Language.RU]: `Подбор градиентов`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerDescription,
		{
			[Language.EN]: `Gradient generator with precise color and position adjustments.`,
			[Language.RU]: `Генератор градиентов с тонкой настройкой цветов и их позиций.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerSubDescription,
		{
			[Language.EN]: `Option to save gradients to favorites, copy CSS code, and download the generated image.`,
			[Language.RU]: `Возможность добавлять градиенты в избранное, копировать CSS-код и скачивать сгенерированное изображение.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_1_Title,
		{
			[Language.EN]: `Effector`,
			[Language.RU]: `Effector`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_1_Description,
		{
			[Language.EN]: `State management split into a current settings model and a gradients data model.`,
			[Language.RU]: `Управление состоянием разделено на модель текущих настроек и модель данных градиентов.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_2_Title,
		{
			[Language.EN]: `@uiw/react-color`,
			[Language.RU]: `@uiw/react-color`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_2_Description,
		{
			[Language.EN]: `Color wheel and presets for quick gradient adjustments.`,
			[Language.RU]: `Цветовое колесо и предустановки для удобной настройки градиентов.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_3_Title,
		{
			[Language.EN]: `Screenshots via html-to-image`,
			[Language.RU]: `Скришоты с html-to-image`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_3_Description,
		{
			[Language.EN]: `Option to save the gradient as a PNG with CSS code included at the bottom of the image.`,
			[Language.RU]: `Возможность сохранять градиент в формате PNG с CSS-кодом внизу изображения.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_4_Title,
		{
			[Language.EN]: `Clipboard API`,
			[Language.RU]: `Clipboard API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerTechnology_4_Description,
		{
			[Language.EN]: `Copying the CSS code for the gradient to the clipboard with a single button click.`,
			[Language.RU]: `Копирование CSS-кода для градиента в буфер обмена по нажатию кнопки.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsGradientPickerResult,
		{
			[Language.EN]: `The project turned out neat and compact. I often use it for personal projects to create stylish gradients.`,
			[Language.RU]: `Проект получился милым и лаконичным, я регулярно использую его в разработке личных проектов для создания эстетичных градиентов.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTitle,
		{
			[Language.EN]: `PWA Pilot`,
			[Language.RU]: `PWA Пилот`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotDescription,
		{
			[Language.EN]: `The goal was to showcase the core capabilities of Progressive Web Apps in a single project.`,
			[Language.RU]: `Целью было раскрыть основные возможности Progressive Web Apps в одном проекте.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotSubDescription,
		{
			[Language.EN]: `Simple Mobile-First design with robust functionality.`,
			[Language.RU]: `Простой Mobile-First дизайн с мощной функциональностью.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_1_Title,
		{
			[Language.EN]: `Barcode Web API`,
			[Language.RU]: `Barcode Web API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_1_Description,
		{
			[Language.EN]: `This module provided camera access, flashlight use for easier scanning, live video stream display, and barcode scanning and decoding.`,
			[Language.RU]: `Этот модуль включал доступ к камере, использование фонарика для удобного сканирования, отображение текущего видеопотока и, наконец, сканирование и декодирование штрих-кодов.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_2_Title,
		{
			[Language.EN]: `Online/Offline control`,
			[Language.RU]: `Контроль онлайн/оффлайн состояния`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_2_Description,
		{
			[Language.EN]: `Monitoring network connection status.`,
			[Language.RU]: `Мониторинг состояния сетевого подключения.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_3_Title,
		{
			[Language.EN]: `Background Tasks Web API`,
			[Language.RU]: `Background Tasks Web API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_3_Description,
		{
			[Language.EN]: `The API added a random entry to indexedDB every 5 seconds in the background. We included options to pause and resume background tasks, as well as a database clearing feature.`,
			[Language.RU]: `API использовался для добавления случайной записи в indexedDB каждые 5 секунд в фоновом режиме. Мы предусмотрели возможность приостановки и возобновления фоновой работы, а также функцию очистки базы данных.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_4_Title,
		{
			[Language.EN]: `NFC Web API`,
			[Language.RU]: `NFC Web API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_4_Description,
		{
			[Language.EN]: `This module enabled scanning and rewriting data on special NFC tags.`,
			[Language.RU]: `Этот модуль предоставлял возможность сканировать и перезаписывать данные специальных NFC-меток.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_5_Title,
		{
			[Language.EN]: `Bluetooth Web API`,
			[Language.RU]: `Bluetooth Web API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_5_Description,
		{
			[Language.EN]: `Displayed a list of Bluetooth devices connected to the webpage and allowed users to connect or disconnect devices as needed.`,
			[Language.RU]: `Отображался список Bluetooth-устройств, подключенных к веб-странице, и предлагалось подключить/отключить нужное устройство.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_6_Title,
		{
			[Language.EN]: `USB web API`,
			[Language.RU]: `USB web API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_6_Description,
		{
			[Language.EN]: `This module had similar functionality and managed all devices connected via USB, such as microphones, cameras, keyboards, etc.`,
			[Language.RU]: `Этот модуль имел схожую функциональность и работал со всеми устройствами, подключенными к странице через USB, включая микрофон, камеру, клавиатуру и т.д.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_7_Title,
		{
			[Language.EN]: `Push notifications`,
			[Language.RU]: `Push-уведомления`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_7_Description,
		{
			[Language.EN]: `We set up a server for push notifications and linked a service worker to manage notification subscriptions.`,
			[Language.RU]: `Мы настроили сервер для push-уведомлений и подключили service-worker для управления подписками на поток уведомлений.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_8_Title,
		{
			[Language.EN]: `IndexedDB API`,
			[Language.RU]: `IndexedDB API`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotTechnology_8_Description,
		{
			[Language.EN]: `The app stored 500,000 records in indexedDB to showcase fast key and value searches across large datasets.`,
			[Language.RU]: `Приложение хранило полмиллиона записей в indexedDB, чтобы продемонстрировать скорость поиска по ключу и значению в большом объеме данных.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsPWAPilotResult,
		{
			[Language.EN]: `The pilot launch was successful, and it evolved into a full-fledged app for tracking goods from declaration to production use.`,
			[Language.RU]: `Запуск пилота прошел успешно, и он был доработан до полноценного приложения для отслеживания движения товаров от момента заявки до фактического использования в производстве.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationTitle,
		{
			[Language.EN]: `Data visualization`,
			[Language.RU]: `Визуализация данных`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationDescription,
		{
			[Language.EN]: `Displaying a dataset as a line chart and bar chart. Customizing date ranges and chart styles.`,
			[Language.RU]: `Отображение набора данных в виде линейного графика и гистограммы. Настройка диапазонов дат и стилей графиков.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationSubDescription,
		{
			[Language.EN]: `Working with canvas, calculating graph points, smoothing graphs using CanvasRenderingContext2D methods`,
			[Language.RU]: `Работа с canvas, расчет точек для графиков, сглаживание с использованием методов CanvasRenderingContext2D.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationTechnology_1_Title,
		{
			[Language.EN]: `Canvas`,
			[Language.RU]: `Canvas`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationTechnology_1_Description,
		{
			[Language.EN]: `Drawing coordinate axes and one or more graphs. Two line chart rendering options: by points or curves, depending on display settings. Filling the area under the graph. Animation using requestAnimationFrame.`,
			[Language.RU]: `Отрисовка осей координат и одного или нескольких графиков. Два варианта отрисовки линейного графика: по точкам и кривым, в зависимости от настроек. Закрашивание области под графиком. Анимация с использованием requestAnimationFrame.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationTechnology_2_Title,
		{
			[Language.EN]: `Effector`,
			[Language.RU]: `Effector`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationTechnology_2_Description,
		{
			[Language.EN]: `Models that manage the creation of new graphs, adding data, and editing settings for the current visualization`,
			[Language.RU]: `Модели, которые управляют созданием новых графиков, добавлением данных и редактированием настроек текущей визуализации.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsDataVisualizationResult,
		{
			[Language.EN]: `I extracted the line and bar chart components into packages, enabling their use in a small custom library for visualizing small datasets.`,
			[Language.RU]: `Я вынесла компоненты линейного и столбчатого графиков в отдельные пакеты, что позволило использовать их в небольшой самописной библиотеке для визуализации небольших объемов данных.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTitle,
		{
			[Language.EN]: `Unpuzzle`,
			[Language.RU]: `Unpuzzle`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleDescription,
		{
			[Language.EN]: `A mobile browser-based puzzle game with minimal dependencies and procedurally generated levels. Animations, interface sounds, vibrations, and a system for purchasing themes and skins for game elements.`,
			[Language.RU]: `Мобильная браузерная игра-головоломка с минимальным количеством зависимостей и генерируемыми уровнями. Анимации, звуковые эффекты интерфейса, вибрации и система покупки тем и оформлений для игровых элементов.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleSubDescription,
		{
			[Language.EN]: `The game field consists of cells, each of which can be an arrow with a specific direction, a saw, a bomb, or a wall. Some cells may also be temporarily locked for a certain number of moves. The goal is to clear the field and advance to the next level.`,
			[Language.RU]: `Игровое поле состоит из клеток, каждая из которых может быть стрелкой с определенным направлением, пилой, бомбой или стеной. Некоторые клетки могут быть временно заблокированы на несколько ходов. Цель — очистить поле и перейти на следующий уровень.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_1_Title,
		{
			[Language.EN]: `Effector`,
			[Language.RU]: `Effector`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_1_Description,
		{
			[Language.EN]: `State management is divided into two parts: the user interface, which stores user settings and modal window flags, and the store for the current level and level list with records and the current state of the game field.`,
			[Language.RU]: `Управление состоянием разделено на две части: пользовательский интерфейс, который хранит настройки пользователя и флаги модальных окон, и стор текущего уровня и списка уровней с рекордами и текущим состоянием игрового поля.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_2_Title,
		{
			[Language.EN]: `Level generation`,
			[Language.RU]: `Генерация уровней`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_2_Description,
		{
			[Language.EN]: `Random generation of cells with a check for level solvability`,
			[Language.RU]: `Случайная генерация клеток с проверкой проходимости уровня`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_3_Title,
		{
			[Language.EN]: `Animation of cell movement and removal`,
			[Language.RU]: `Анимация перемещения и удаления клеток`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_3_Description,
		{
			[Language.EN]: `Animation is achieved by cloning an element, hiding the original cell, and transforming the clone using Element.animate(...). Once the animation is complete and the store is updated, the original element is displayed in the new position.`,
			[Language.RU]: `Анимация реализована через клонирование элемента, скрытие исходной ячейки и трансформацию клона с помощью Element.animate(...). После завершения анимации и обновления стора, исходный элемент отображается на новом месте.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_4_Title,
		{
			[Language.EN]: `Music and interface sound system`,
			[Language.RU]: `Система фоновой музыки и звуковых эффектов интерфейса`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleTechnology_4_Description,
		{
			[Language.EN]: `Ability to enable background music, adjust volume, and switch between tracks. A custom sound package providing methods for playing sounds with volume control via AudioContext and BufferLoader.`,
			[Language.RU]: `Возможность включить фоновую музыку, настроить громкость и переключаться между треками. Самописный пакет sound, который предоставляет методы воспроизведения звуков с настройкой громкости через AudioContext и BufferLoader.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsUnPuzzleResult,
		{
			[Language.EN]: `The result is a cozy app for fans of casual games. The auto-generated levels keep things engaging, while the pleasant music and soft sounds when clicking buttons and cells help you relax.`,
			[Language.RU]: `Получилось уютное приложение для любителей казуальных игр. Автогенерация уровней не даёт заскучать, а приятная музыка и мягкие звуки при нажатии на кнопки и клетки помогают расслабиться.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTitle,
		{
			[Language.EN]: `Movement of inventory`,
			[Language.RU]: `Движение ТМЦ`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCDescription,
		{
			[Language.EN]: `Inventory refers to goods and materials, and this app is dedicated to tracking their movement from requisition to disposal.`,
			[Language.RU]: `ТМЦ — это товарно-материальные ценности, и данное приложение посвящено их движению от момента заявки до списания.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCSubDescription,
		{
			[Language.EN]: `The full cycle of movement includes assigning storage locations, transfers between warehouses and factories, barcode and label assignment, issuing goods, and many other processes.`,
			[Language.RU]: `Полный цикл движения включает привязку к месту хранения, перемещение между складами и заводами, присвоение штрихкодов и маркировок, выдачу товаров и множество других процессов.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_1_Title,
		{
			[Language.EN]: `Saving data in IndexedDB`,
			[Language.RU]: `Сохранение данных в IndexedDB`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_1_Description,
		{
			[Language.EN]: `The initial approach involved creating an app that would retain almost full functionality in offline mode. To achieve this, a system was developed that fetches data from either the local database or the server, depending on the network status.`,
			[Language.RU]: `Изначально предполагалось создать приложение, которое сохраняет почти полную функциональность в оффлайн-режиме. Для этого была разработана система, которая в зависимости от состояния сети берет данные из локальной базы или с сервера.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_2_Title,
		{
			[Language.EN]: `Request queue system`,
			[Language.RU]: `Система очередей запросов	`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_2_Description,
		{
			[Language.EN]: `To enable active use of the app without a network, a request queue system was created. It stores all request parameters in IndexedDB, modifies data locally, marks it as unsynchronized, and sends the request batch in the correct order when the network is available.`,
			[Language.RU]: `Чтобы обеспечить работу приложения без сети, была создана система очередей запросов. Она сохраняет параметры запросов в IndexedDB, изменяет данные локально, помечая их как несинхронизированные, и отправляет пакет запросов в правильном порядке при восстановлении сети.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_3_Title,
		{
			[Language.EN]: `PWA`,
			[Language.RU]: `PWA`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_3_Description,
		{
			[Language.EN]: `The system was built as a PWA, allowing installation on devices and use regardless of network status.`,
			[Language.RU]: `Система разрабатывалась как PWA с возможностью установки на устройство и использования независимо от состояния сети.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_4_Title,
		{
			[Language.EN]: `Scanning passes via NFC`,
			[Language.RU]: `Сканирование пропусков с помощью NFC`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_4_Description,
		{
			[Language.EN]: `Authentication in the app had two paths: via a login form and by scanning a pass held to the phone. For passes that couldn’t be read by the browser, the app redirected to a helper native app installed on employees’ phones, which returned the pass data to the original page.`,
			[Language.RU]: `Авторизация в приложении осуществлялась двумя способами: через форму входа и через сканирование пропуска, приложенного к телефону. Для пропусков, которые не могли быть прочитаны браузером, использовалось вспомогательное нативное приложение, установленное на телефоны сотрудников, которое возвращало данные на исходную страницу.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_5_Title,
		{
			[Language.EN]: `Barcode scanning using the Barcode API and zxing library`,
			[Language.RU]: `Считывание штрихкодов с помощью Barcode API и библиотеки zxing`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_5_Description,
		{
			[Language.EN]: `Scanning and local parsing of barcodes before sending data to the server were initially implemented using the Barcode API, but later moved to the zxing library to ensure functionality across all devices.`,
			[Language.RU]: `Считывание и локальный парсинг штрихкодов перед отправкой на сервер изначально выполнялись с помощью Barcode API, а затем были перенесены на библиотеку zxing для обеспечения работы на любом устройстве.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_6_Title,
		{
			[Language.EN]: `Virtualization with react-virtualized`,
			[Language.RU]: `Виртуализация с использованием react-virtualized`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_6_Description,
		{
			[Language.EN]: `To ensure stable performance with large datasets where pagination wasn’t an option, the react-virtualized library was used. It was most commonly applied in tables and dropdown lists.`,
			[Language.RU]: `Для стабильной работы с большими объемами данных, где пагинация не применялась, использовалась библиотека react-virtualized. Она чаще всего применялась в таблицах и выпадающих списках.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_7_Title,
		{
			[Language.EN]: `Effector`,
			[Language.RU]: `Effector`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCTechnology_7_Description,
		{
			[Language.EN]: `All system state, requests, and side effects were managed through effector. Models were divided by screens and further broken down into logically cohesive stores.`,
			[Language.RU]: `Все состояние системы, запросы и побочные эффекты управлялись через effector. Модели разделялись по экранам и далее на логически завершенные сторы.`,
		},
	],
	[
		TRANSLATION_KEYS.ProjectsTMCResult,
		{
			[Language.EN]: `Over its lifetime, the system underwent many changes. Architectural approaches and development processes evolved. But the goal remained constant: to create a convenient and useful app for warehouse employees. I was fortunate to visit one of the factories, receive feedback, and see how the MVP version of the app was gradually integrated into the employees’ workflow.`,
			[Language.RU]: `За время своего существования система прошла через множество изменений. Менялись архитектурные подходы и процессы разработки. Но неизменным оставалось стремление создать удобное и полезное приложение для сотрудников складов. Мне посчастливилось побывать на одном из заводов, получить обратную связь и увидеть, как MVP версия приложения постепенно внедряется в рабочий процесс.`,
		},
	],
]);

function getTranslation(key: TRANSLATION_KEYS, language: Language): string {
	return translateDictionary.get(key)?.[language] || key;
}

export default getTranslation;
