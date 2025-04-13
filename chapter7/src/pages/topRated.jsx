import Card from "../components/Card/card";
import useCustomFetch from "../hooks/useCustomFetch";
import Loading from "../components/loading";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";

const TopRated = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/top_rated?language=ko-KR", "topRated");

  if (isLoading) {
    return (
      <>
        <CardListSkeleton number={20} />
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
export default TopRated;
