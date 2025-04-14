import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/Card/card";
import Loading from "../components/loading";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

  const [ref, inView] = useInView({
    threshold: 0, // 0~1 사이의 값. 0이면 살짝 보이기만 해도 트리거
    triggerOnce: false,
  });

  //inView의 상태값에 따른 요청
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      console.log("스크롤");
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

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
  console.log(movies.pages);
  return (
    <>
      {movies.pages?.map((page, idx) => (
        <Card key={idx} movies={page.data.results} />
      ))}
      <div ref={ref} style={{ height: "30px" }} />
    </>
  );
};
export default NowPlaying;
