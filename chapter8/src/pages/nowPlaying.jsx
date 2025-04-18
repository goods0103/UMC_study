import Card from "../components/Card/card";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styled from "styled-components";
import { useGetInfiniteMovies } from "../hooks/Queries/useGetInfiniteMovies";
import * as C from "../components/Card/cardWrapper.style";
import { ClipLoader } from "react-spinners";

const LoadingTag = styled.div`
  display: flex;
  margin: 0 auto;
`;

const NowPlaying = () => {
  const {
    data: movies,
    isPending,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteMovies("now_playing");

  const [ref, inView] = useInView({
    threshold: 1, // 0~1 사이의 값. 0이면 살짝 보이기만 해도 트리거
  });

  //inView의 상태값에 따른 요청
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  if (isError) {
    return (
      <>
        <Error></Error>
      </>
    );
  }

  console.log(movies);
  return (
    <>
      <C.CardsWrapper>
        {movies?.pages
          .map((page) => page.results)
          .flat()
          .map((movie, _) => (
            <Card movie={movie} key={movie.id} />
          ))}
        {isFetching && <CardListSkeleton number={20} />}
      </C.CardsWrapper>
      <LoadingTag ref={ref}>
        <ClipLoader color="#fff" />
      </LoadingTag>
    </>
  );
};
export default NowPlaying;
