import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card";
import { axiosInstance } from "../../apis/axios-instance";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  axios.get;
  // useState로 데이터 불러오기
  useEffect(() => {
    const getMovies = async () => {
      const movies = await axiosInstance.get(
        "/movie/popular?language=en-US&page=1"
      );
      setMovies(movies);
      console.log(movies);
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
