import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import styled from "styled-components";

const DetailHead = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieDetail = () => {
  const params = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${params.movieId}`);

  return (
    <>
      <DetailHead>{movie.data?.original_title}</DetailHead>
      <DetailBody>aaaa</DetailBody>
    </>
  );
};
export default MovieDetail;
