import Card from "../components/Card/card";
import Error from "../components/error";
import { useGetMovies } from "../hooks/Queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";

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
      <>
        <CardListSkeleton number={20}></CardListSkeleton>
      </>
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
    <>
      <Card movies={movies} />
    </>
  );
};
export default HomePage;
