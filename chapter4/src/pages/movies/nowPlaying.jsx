import useCustomFetch from "../../hooks/useCustomFetch";

const NowPlaying = () => {
  const { data, isloading, isError } = useCustomFetch(
    "/movie/now_playing?language=en-US&page=1"
  );
  console.log(data);
  console.log(isloading);
  console.log(isError);

  return <>{/* <Card data={data}></Card> */}</>;
};
export default NowPlaying;
