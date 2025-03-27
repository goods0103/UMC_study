import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import RootLayout from "./layout/root-layout";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import SearchPage from "./pages/search";
import CategoryPage from "./pages/category";
import NowPlaying from "./pages/nowPlaying";
import Popular from "./pages/popular";
import TopRated from "./pages/topRated";
import UpComming from "./pages/upComing";
import MovieDetail from "./pages/movieDetail";

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
          element: <SignUpPage />,
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
            {
              path: ":movieId",
              element: <MovieDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
