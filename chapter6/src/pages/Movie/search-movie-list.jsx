import Card from "../../components/card.jsx";
import useCustomFetch from "../../hooks/useCustomFetch";
import { useSearchParams } from "react-router-dom";

const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");

  const url = `https://api.themoviedb.org/3/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;

  const { data: movies, isLoading, isError } = useCustomFetch(url);
  console.log(movies);

  if (isLoading === true) {
    return <h1 color="white">로딩 중</h1>;
  }

  if (mq && movies.data?.results.length === 0) {
    return <h1 color="white">해당하는 데이터가 없습니다</h1>;
  }

  return <Card movies={movies}></Card>;
};

export default SearchMovieList;
