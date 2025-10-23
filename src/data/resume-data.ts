import type { TTechCategory } from "../types/data";

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

export const TECHNOLOGIES: TTechCategory[] = [
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
