import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Essays } from "./components/Essays";
import { Projects } from "./components/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "about", Component: About },
      { path: "essays", Component: Essays },
      { path: "projects", Component: Projects },
    ],
  },
]);
