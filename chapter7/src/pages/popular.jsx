import Card from "../components/Card/card";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import { useGetMovies } from "../hooks/Queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import { useGetInfiniteMovies } from "../hooks/Queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const LoadingTag = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Popular = () => {
  // const {
  //   data: movies,
  //   isPending,
  //   isError,
  // } = useQuery({
  //   queryFn: () => useGetMovies({ category: "popular", pageParam: 1 }),
  //   queryKey: ["movies", "popular"],
  //   cacheTime: 10000, //캐싱을 이용한 재호출방지시간
  //   staleTime: 10000,
  // });

  const {
    data: movies,
    isPending,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useGetInfiniteMovies("popular");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);
  // if (isPending) {
  //   return (
  //     <>
  //       <CardListSkeleton number={20} />
  //     </>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <>
  //       <Error></Error>
  //     </>
  //   );
  // }
  return (
    <>
      {movies?.pages.map((page, idx) => {
        return <Card key={idx} movies={page} />;
      })}
      <LoadingTag ref={ref}>
        <ClipLoader color="#fff" />
      </LoadingTag>
    </>
  );
};
export default Popular;
