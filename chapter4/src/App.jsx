import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import RootLayout from "./layout/root-layout";
import LoginPage from "./pages/login";
import SignPage from "./pages/signup";
import SearchPage from "./pages/search";
import CategoryPage from "./pages/movies/category";
import NowPlaying from "./pages/movies/nowplaying";
import Popular from "./pages/movies/popular";
import TopRated from "./pages/movies/topRated";
import UpComming from "./pages/movies/upComing";

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
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignPage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "movies",
          element: <CategoryPage />,
          children: [
            {
              path: "now-playing",
              element: <NowPlaying />,
            },
            {
              path: "popular",
              element: <Popular />,
            },
            {
              path: "top-rated",
              element: <TopRated />,
            },
            {
              path: "up-coming",
              element: <UpComming />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
