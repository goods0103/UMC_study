import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ImgStyle1 = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover; /* 비율 유지하면서 꽉 채움 */
  border-radius: 10px;
`;

const MovieInfo1 = styled.div`
  width: 200px;
  color: white;
`;

const MovieBox = styled.div`
  color: white;
`;

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
      console.log(movies);
      console.log(movies.status); // 200이어도 데이터가 예상과 다른 경우가 있음
      console.log(movies.statusText); // "OK"로 나올 것
      console.log(movies.data); // 실제 데이터 출력
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
export default Popular;
