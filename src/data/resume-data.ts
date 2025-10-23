import type { IProject, ITechCategory } from "../types/data";

export const FULL_NAME = "Пексялев Виталий Викторович";

export const PROFESSION = "Frontend Developer";

export const TECHNOLOGYS = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux Toolkit",
  "GraphQL",
  "Vite",
];

export const EMAIL = "peksyalev.vitaliy@gmail.com";
export const TELEGRAM = "@Vitaliy154";
export const GITHUB = "https://github.com/VitaliyPks";

export const INFO_SHORT =
  "Frontend-разработчик с 3+ годами опыта. Создаю быстрые, доступные и масштабируемые веб-приложения с использованием современных технологий.";

export const ABOUT_TEXT = `Я frontend-разработчик с опытом работы 4 года, специализирующийся на JavaScript/TypeScript, React и Redux. Мои основные компетенции включают разработку интерфейсов с удобным UI, настройку клиент-серверного взаимодействия, управление состоянием приложения с помощью Redux Toolkit и работу с API. Я имею опыт работы с полным циклом разработки, начиная от проектирования базы данных и заканчивая развертыванием проекта.`;

export const PERSONAL_QUALITIES = [
  {
    title: "Коммуникабельность",
    description:
      "Эффективно взаимодействую с командой и клиентами, что способствует успешной реализации проектов.",
  },
  {
    title: "Гибкость",
    description:
      "Легко адаптируюсь к изменениям и новым требованиям, что помогает успешно справляться с динамичными проектами.",
  },
  {
    title: "Стремление к обучению",
    description:
      "Постоянно развиваю свои навыки и изучаю новые технологии, чтобы оставаться на передовой в своей области.",
  },
];

export const TECHNOLOGIES: ITechCategory[] = [
  {
    title: "Языки программирования",
    items: [
      { name: "JavaScript", years: 4, level: "Advanced" },
      { name: "TypeScript", years: 3, level: "Advanced" },
    ],
  },
  {
    title: "Фреймворки и библиотеки",
    items: [
      { name: "React", years: 4, level: "Advanced" },
      { name: "Redux Toolkit", years: 4, level: "Advanced" },
      { name: "React Router", years: 4, level: "Intermediate" },
      { name: "React Hook Form", years: 4, level: "Intermediate" },
      { name: "NextJS", years: 1, level: "Intermediate" },
      { name: "Node.JS", years: 1, level: "Basic" },
    ],
  },
  {
    title: "Стили и языки разметки",
    items: [
      { name: "HTML", years: 4, level: "Advanced" },
      { name: "CSS", years: 4, level: "Advanced" },
      { name: "SCSS/SASS", years: 3, level: "Advanced" },
      { name: "MUI", years: 1, level: "Basic" },
      { name: "Styled Components", years: 1, level: "Basic" },
    ],
  },
  {
    title: "Сборщики",
    items: [
      { name: "Webpack", years: 2, level: "Intermediate" },
      { name: "Vite", years: 3, level: "Intermediate" },
    ],
  },
  {
    title: "Операционные системы",
    items: [
      { name: "Windows", years: 4, level: "Advanced" },
      { name: "Linux", years: 1, level: "Intermediate" },
    ],
  },
  {
    title: "Прочее",
    items: [
      { name: "Rest API", years: 4, level: "Advanced" },
      { name: "GraphQL", years: 3, level: "Advanced" },
      { name: "Git", years: 4, level: "Intermediate" },
      { name: "Figma", years: 3, level: "Intermediate" },
      { name: "Chart.js", years: 2, level: "Intermediate" },
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    id: "gisp-mainpage",
    title: "gisp/mainpage",
    role: "Frontend Developer",
    period: "Июль 2024 – Февраль 2025",
    description:
      "Государственная информационная система промышленности. Создание и поддержка различных разделов портала, работа с большими объемами данных.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "WebSocket",
      "Redux Toolkit",
      "SASS",
      "GraphQL",
      "React Hook Form",
      "Chart.js",
    ],
    responsibilities: [
      "Участие в редизайне разделов mainpage, mainpage/profile, mainpage/news, mainpage/kbase, а также админ панели.",
      "Добавление нового функционала и управление им через админ-панель.",
      "Доработка и оптимизация виджета чат-бота и операторского чата.",
      "Работа с большими объемами данных: таблицы с сортировкой, фильтрами, поиском.",
      "Разработка сложных форм с валидацией через React Hook Form + Yup.",
    ],
    achievements: [
      "Снизил время загрузки страниц на 40% за счет оптимизации GraphQL-запросов, мемоизации и ленивой загрузки.",
      "Рефакторинг чата ускорил инициализацию на 30%, улучшив UX.",
      "Внёс вклад в внедрение code review — баги в production сократились на 25%.",
      "Реализовал формы с валидацией — ошибки ввода сократились на 35%.",
      "Интегрировал админ-панель для самостоятельного обновления контента маркетингом.",
    ],
    team: "Frontend – 4, Backend – 3, PM – 2, Teamlead – 1, UX/UI designer – 1",
  },
  {
    id: "helbe",
    title: "helbe",
    role: "Frontend Developer",
    period: "Май 2023 – Июль 2024",
    description: "Персональный помощник по здоровью.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "SASS",
      "GraphQL",
      "Axios",
      "React Hook Form",
      "Chart.js",
      "yMaps 3.0",
      "PWA",
    ],
    responsibilities: [
      "Работа единственным разработчиком на проекте.",
      "Разработка PWA-приложения с нуля по макетам из Figma.",
      "Настройка клиент-серверного взаимодействия через GraphQL.",
      "Разработка desktop-версии.",
      "Интеграция Chart.js и yMaps, переход с Webpack на Vite.",
    ],
    achievements: [
      "Успешная реализация PWA и графиков — улучшен пользовательский опыт.",
      "Сокращение времени сборки на 60% благодаря переходу на Vite.",
      "Подключение интернет-эквайринга — пользователи могут оплачивать заказы на сайте.",
    ],
    team: "Frontend – 1, Backend – 2, PM – 1, Teamlead – 1, UX/UI designer – 1",
  },
  {
    id: "6500k",
    title: "6500k",
    role: "Frontend Developer",
    period: "Март 2025 – Сентябрь 2025",
    description: "Проектная работа. Создание интернет-магазина электротоваров.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Redux Toolkit",
      "SASS",
      "Axios",
      "React Hook Form",
      "Swiper",
    ],
    responsibilities: [
      "Проектирование БД и архитектуры фронтенда.",
      "Разработка REST API на Node.js + Express (JWT, файлы, валидация).",
      "Клиентская часть на Next.js 15 с TypeScript и Redux Toolkit.",
      "Интеграция Swiper, React Hook Form, Yup, react-select.",
      "Деплой на VPS, настройка Nginx, SSL, SEO (sitemap, метаданные).",
    ],
    achievements: [
      "Запущен полноценный интернет-магазин с нуля — принимает заказы с первого дня.",
      "Оптимизация загрузки изображений — карточки грузятся на 50% быстрее.",
      "Автоматическая генерация sitemap.xml — улучшено SEO.",
      "Lighthouse Performance Score: mobile – 93, desktop – 100.",
    ],
    team: "Frontend developer – 1",
  },
  {
    id: "gisp-chisp",
    title: "gisp/chisp",
    role: "Frontend Developer",
    period: "Сентябрь 2022 – Январь 2023",
    description:
      "Информационная система для мониторинга и управления проектами.",
    stack: ["React", "TypeScript", "Webpack", "Redux Toolkit", "SASS", "Axios"],
    responsibilities: [
      "Разработка проекта с нуля в одиночку.",
      "Реализация 6 разделов и админ-панели по макетам Figma.",
      "Интеграция с REST API, работа с большими таблицами (сортировка, фильтры, поиск).",
    ],
    achievements: [
      "Система разработана за 4 месяца.",
      "Надёжное API-взаимодействие — сетевые сбои <1%.",
      "Точность верстки 98% по оценке дизайнера.",
    ],
    team: "Frontend – 1, Backend – 2, PM – 1, Teamlead – 1, UX/UI designer – 1",
  },
];
