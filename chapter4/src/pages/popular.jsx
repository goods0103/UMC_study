import Card from "../components/card";
import useCustomFetch from "../hooks/useCustomFetch";

const Popular = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/popular?language=ko-KR");

  return (
    <>
      <Card movies={movies} />
    </>
  );
};
export default Popular;
