import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import Movies from "./pages/movies";
import NotFound from "./pages/not-found";
import RootLayout from "./layout/root-layout";

function App() {
  //컴포넌트 분리하기
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
