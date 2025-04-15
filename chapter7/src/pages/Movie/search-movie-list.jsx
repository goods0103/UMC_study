import Card from "../../components/Card/card";
import { useSearchParams } from "react-router-dom";
import CardListSkeleton from "../../components/Card/Skeleton/card-list-skeleton";
import { useQuery } from "@tanstack/react-query";
import { useSearchMovies } from "../../hooks/Queries/useSearchMovies";

const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");

  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => useSearchMovies({ mq: mq, pageParam: 1 }),
    queryKey: ["search_movies", mq],
  });

  console.log(movies);

  if (isPending) {
    return (
      <>
        <CardListSkeleton number={20} />
      </>
    );
  }

  if (mq && movies.data?.results.length === 0) {
    return <h1 color="white">해당하는 데이터가 없습니다</h1>;
  }

  return <Card movies={movies.data}></Card>;
};

export default SearchMovieList;
