import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import RootLayout from "../layout/root-layout";
import { AboutPage } from "../pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about/:id",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
