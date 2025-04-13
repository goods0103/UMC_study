import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/Card/card";
import Loading from "../components/loading";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";

const NowPlaying = () => {
  const {
    data: movies,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCustomFetch("/movie/now_playing?language=ko-KR", "nowPlaying", {
    isInfinite: true,
  });

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
  console.log(movies);
  console.log("hasNextPage:", hasNextPage);
  console.log("isFetchingNextPage:", isFetchingNextPage);
  return (
    <>
      {<Card movies={movies} />}
      <button color="yellow" onClick={() => fetchNextPage()}>
        {" "}
        더 보기{" "}
      </button>
    </>
  );
};
export default NowPlaying;
