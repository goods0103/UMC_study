import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/card";

const NowPlaying = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/now_playing?language=ko-KR");

  if (isError) {
    return (
      <>
        <h1 style={{ color: "white" }}>에러입니다</h1>
      </>
    );
  }
  console.log(movies);
  console.log(isLoading);
  console.log(isError);

  return <>{<Card movies={movies} />}</>;
};
export default NowPlaying;
