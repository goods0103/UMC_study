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
  } = useCustomFetch("/movie/now_playing?language=ko-KR", "nowPlaying");

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

  return <>{<Card movies={movies} />}</>;
};
export default NowPlaying;
