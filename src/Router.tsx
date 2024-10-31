import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Resume from "./pages/Resume";
import Project from "./components/Project";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/whatido",
        element: <WhatIDo />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
