import Card from "../components/Card/card";
import useCustomFetch from "../hooks/useCustomFetch";
import Loading from "../components/loading";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import * as C from "../components/Card/cardWrapper.style";
import styled from "styled-components";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useGetMovies } from "../hooks/Queries/useGetMovies";
import { useState, useEffect } from "react";

const PageButton = styled.button`
  text-align: center;
  &:hover {
    background-color: pink;
  }
  margin: auto;
  background: #e50914;
  font-size: 15px;
  color: white;
  border-radius: 5px;
`;

const PageBox = styled.div`
  display: flex;
  gap: 2em;
  align-self: center;
`;

const UpComming = () => {
  const [page, setPage] = useState(1);

  const {
    data: movies,
    isFetching,
    isPlaceholderData,
    isPending,
  } = useQuery({
    queryFn: () => useGetMovies({ category: "upcoming", pageParam: page }),
    queryKey: ["movies", "upcoming", page],
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    console.log("📦 movies changed", movies);
    // console.log(page);
    // console.log(movies?.total_pages);
  }, [movies]);

  if (isFetching) {
    return (
      <C.CardsWrapper>
        <CardListSkeleton number={20} />
      </C.CardsWrapper>
    );
  }

  // if (isError) {
  //   return (
  //     <>
  //       <Error></Error>
  //     </>
  //   );
  // }

  return (
    <>
      <C.CardsWrapper>
        {movies.results.map((movie, _) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </C.CardsWrapper>
      <PageBox>
        <PageButton
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          이전
        </PageButton>
        <div style={{ color: "white" }}> {page} </div>
        <PageButton
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((old) => old + 1);
            }
          }}
          disabled={page === movies.total_pages}
        >
          다음
        </PageButton>
      </PageBox>
    </>
  );
};
export default UpComming;
