import Card from "../components/Card/card";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import { useGetInfiniteMovies } from "../hooks/Queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import * as C from "../components/Card/cardWrapper.style";

const LoadingTag = styled.div`
  display: flex;
  margin: 0 auto;
`;

const TopRated = () => {
  const {
    data: movies,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteMovies("top_rated");

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      <C.CardsWrapper>
        {movies?.pages
          .map((page, _) => page.results)
          .flat()
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        {isFetching && <CardListSkeleton number={20} />}
      </C.CardsWrapper>
      <LoadingTag ref={ref}>
        <ClipLoader color="#fff" />
      </LoadingTag>
    </>
  );
};
export default TopRated;
