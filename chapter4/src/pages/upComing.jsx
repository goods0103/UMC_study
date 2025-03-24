import Card from "../components/card";
import useCustomFetch from "../hooks/useCustomFetch";

const UpComming = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/upcoming?language=ko-KR");

  return (
    <>
      <Card movies={movies} />
    </>
  );
};
export default UpComming;
