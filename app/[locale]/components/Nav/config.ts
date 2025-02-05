import { MyNavLocaleToggleItem } from "./components/MyNavLocaleToggle";
import { MyNavItem } from "./MyNav";

export const localeToggleItems: MyNavLocaleToggleItem[] = [
  {
    locale: "en",
    title: "English",
    text: "En",
  },
  {
    locale: "zh-hans",
    title: "简体中文",
    text: "简",
  },
  {
    locale: "zh-hant",
    title: "繁體中文",
    text: "繁",
  },
]

export const navItems: MyNavItem[] = [
  { type: 'link', props: { to: "/home", label: 'Home' } },
  { type: 'link', props: { to: "/your-tutor", label: 'Your Tutor' } },
  // { type: 'link', props: { to: "/your-developer", label: 'Your Developer' } },
  {
    type: 'dropdown',
    props: {
      title: "Learn",
      items: [
        { label: 'SAT Math', to: '/learn/sat-math' },
        { label: 'Playground', to: '/learn/playground' },
        // { label: 'Index', to: '/learn' },
        // { label: 'Computer Science'), to: '/learn/computer-science/' },
        // { label: 'Math'), to: '/learn/math/' },
        // { label: 'Statistics'), to: '/learn/statistics/' },
      ],
    }
  },
  // {
  //   type: 'dropdown', props: {
  //     title: "Showcase"),
  //     items: [
  //       { label: 'Flashcard'), to: '/showcase/flashcard' },
  //       { label: 'Recipe Planner'), to: '/showcase/recipe_planner' },
  //       // { label: 'TodoMatic', to: '/showcase/todo' },
  //       // { label: 'Gomuku Game', to: '/showcase/gomuku' },
  //       // { label: 'Snake Game', to: '/showcase/snake' },
  //     ],
  //   }
  // },
];
