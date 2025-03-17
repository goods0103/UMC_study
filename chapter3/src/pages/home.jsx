import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  //영화를 담을 state
  const [movies, setMovies] = useState([]);
  //useEffect로 최초 랜더링시에만 데이터 가져오기
  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhhNmQyYTVhMDFhZTBkYWM3NDIxOTA0ZTNkNzc5ZiIsIm5iZiI6MTc0MTkyOTgwOC44MzUsInN1YiI6IjY3ZDNiZDUwYmY0ODE4ODU0YzY0ZjExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMISSGVc0tw55_uilb9bIXWNFclXZSNRKTtRHDr6Z5E",
          },
        }
      );
      setMovies(movies);
      console.log(movies);
    };
    getMovies();
  }, []);

  return (
    <>
      {movies.data?.results.map((movies) => {
        <img src="https://image.tmdb.org/t/p/w500/qUc0Hol3eP74dbW4YyqT6oRLYgT.jpg" />;
      })}
    </>
  );
};
export default HomePage;
