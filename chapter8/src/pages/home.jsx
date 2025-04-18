import Card from "../components/Card/card";
import Error from "../components/error";
import { useGetMovies } from "../hooks/Queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import * as C from "../components/Card/cardWrapper.style";

const HomePage = () => {
  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => useGetMovies({ category: "popular", pageParam: 1 }),
    queryKey: ["home", "popular"],
    cacheTime: 100000,
    staleTime: 100000,
  });
  if (isPending) {
    return (
      <C.CardsWrapper>
        <CardListSkeleton number={20}></CardListSkeleton>
      </C.CardsWrapper>
    );
  }

  if (isError) {
    return (
      <>
        <Error></Error>
      </>
    );
  }
  return (
    <C.CardsWrapper>
      {movies.results.map((movie, idx) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </C.CardsWrapper>
  );
};
export default HomePage;
