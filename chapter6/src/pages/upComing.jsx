import Card from "../components/card";
import useCustomFetch from "../hooks/useCustomFetch";
import Loading from "../components/loading";
import Error from "../components/error";

const UpComming = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/upcoming?language=ko-KR");

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

  return (
    <>
      <Card movies={movies} />
    </>
  );
};
export default UpComming;
