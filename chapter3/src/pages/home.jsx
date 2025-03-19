import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ImgStyle1 = styled.img`
  border-radius: 10px;
`;

const MovieInfo1 = styled.div`
  width: 200px;
  color: white;
`;

const MovieBox = styled.div`
  color: white;
`;

const HomePage = () => {
  //영화를 담을 state
  const [movies, setMovies] = useState([]);
  //useEffect로 최초 랜더링시에만 데이터 가져오기
  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=3",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjhhNmQyYTVhMDFhZTBkYWM3NDIxOTA0ZTNkNzc5ZiIsIm5iZiI6MTc0MTkyOTgwOC44MzUsInN1YiI6IjY3ZDNiZDUwYmY0ODE4ODU0YzY0ZjExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NMISSGVc0tw55_uilb9bIXWNFclXZSNRKTtRHDr6Z5E",
          },
        }
      );
      setMovies(movies);
      // console.log(movies);
    };
    getMovies();
  }, []);

  return (
    <>
      {movies.data?.results.map((movies) => (
        <div key={movies.id}>
          <ImgStyle1
            src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          />
          <MovieInfo1>{movies.title}</MovieInfo1>
          <MovieInfo1>{movies.release_date}</MovieInfo1>
        </div>
      ))}
    </>
  );
};
export default HomePage;
