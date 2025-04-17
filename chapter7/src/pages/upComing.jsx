import Card from "../components/Card/card";
import useCustomFetch from "../hooks/useCustomFetch";
import Loading from "../components/loading";
import Error from "../components/error";
import CardListSkeleton from "../components/Card/Skeleton/card-list-skeleton";
import * as C from "../components/Card/cardWrapper.style";
import styled from "styled-components";

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
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch("/movie/upcoming?language=ko-KR", "upComming");

  // if (isLoading) {
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
      <C.CardsWrapper>
        {movies?.data.results.map((movie, idx) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </C.CardsWrapper>
      <PageBox>
        <PageButton>이전</PageButton>
        <div style={{ color: "white" }}> 1 </div>
        <PageButton>다음</PageButton>
      </PageBox>
    </>
  );
};
export default UpComming;
