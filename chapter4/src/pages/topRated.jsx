import Card from "../components/card";
import useCustomFetch from "../hooks/useCustomFetch";

const TopRated = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/top_rated?language=ko-KR");

  return (
    <>
      <Card movies={movies} />
    </>
  );
};
export default TopRated;
