import Card from "../components/Card/card";
import useCustomFetch from "../hooks/useCustomFetch";
import Loading from "../components/loading";
import Error from "../components/error";

const HomePage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/popular?language=ko-KR");

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
export default HomePage;
