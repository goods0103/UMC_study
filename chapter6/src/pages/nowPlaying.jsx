import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/card";
import Loading from "../components/loading";
import Error from "../components/error";

const NowPlaying = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/now_playing?language=ko-KR");

  if (isLoading) {
    return (
      <>
        <Loading></Loading>
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
