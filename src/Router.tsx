import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
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
        element: <About isDarkMode={false} />,
      },
      {
        path: "/whatido",
        element: <WhatIDo isDarkMode={false} />,
      },
      {
        path: "/resume",
        element: <Resume isDarkMode={false} />,
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
