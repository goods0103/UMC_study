import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  axios.get;
  // useState로 데이터 불러오기
  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `${
          import.meta.env.VITE_MOVIE_BASE_URL
        }/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_MOVIE_AUTH}`,
          },
        }
      );
      setMovies(movies);
    };
    getMovies();
  }, []);
  return (
    <>
      <Card movies={movies} />
    </>
  );
};
export default Popular;
