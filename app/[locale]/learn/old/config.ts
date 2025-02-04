// import { lazy } from "react";
// import { Loadable, markdownLoader } from "../../utils/routes";
// import { statisticsRoute } from "./statistics";
// import { mathRoute } from "./math";

// const LearnPage = Loadable(lazy(() => import('../../components/Learn/LearnPage')));

export const SUBJECTS = [
  // { label: 'Statistics', path: "statistics" }
  { label: 'Playground', path: "playground" }
];

export const learnRoutes = {
  // path: "/learn",
  // element: (<LearnPage />),
  // children: [
  //   {
  //     path: "",
  //     element: (<LearnHome />),
  //   },
  //   mathRoute,
  //   statisticsRoute,
  //   {
  //     path: ":subject",
  //     element: (<MarkdownPage />),
  //     loader: markdownLoader(({ params }) => `/learn/${params.subject}/index.md`),
  //   },
  //   {
  //     path: ":subject/:topic/:chapter",
  //     element: (<MarkdownPage />),
  //     loader: markdownLoader(({ params }) => `/learn/${params.subject}/${params.topic}/${params.chapter}.md`)
  //   },
  // ]
};
