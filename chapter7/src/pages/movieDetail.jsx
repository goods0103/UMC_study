import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import styled from "styled-components";
import Loading from "../components/loading";
import Error from "../components/error";
import CastCard from "../components/castCard";

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 기본적으로 1열로 설정 (세로 배치) */
  gap: 20px; /* 각 아이템 간의 간격 */
  width: 100%;
`;

const DetailHead = styled.div`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/original/${props.$imgpath}`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid; /* 자식 요소도 그리드로 설정 */
  grid-template-columns: 1fr;
  width: 100%;
  height: 35vh;
  border-radius: 10px;
  padding: 1em;
  gap: 10px;
  overflow-y: auto;
`;

const DetailBody = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 기본적으로 1열로 설정 */
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: flex-start;
`;

const TitleStyle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 48px;
  color: white;
  text-align: start;
  -webkit-text-stroke: 0.5px black;
`;

const SubTitleStyle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: white;
  text-align: left;
  -webkit-text-stroke: 0.5px black;
`;

const ContentStyle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-align: left;
  -webkit-text-stroke: 0.5px black;
  max-width: 40%;
  word-wrap: break-word;
  margin-top: 30px;
`;

const MovieDetail = () => {
  const params = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(
    `/movie/${params.movieId}?language=ko-KR`,
    `${params.movieId}`
  );

  const { data: cast } = useCustomFetch(
    `/movie/${params.movieId}/credits?language=ko-KR`
  );

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

  console.log(cast.data);
  return (
    <DetailWrapper>
      <DetailHead $imgpath={movie.data?.backdrop_path}>
        <TitleStyle>{movie.data?.original_title}</TitleStyle>
        <SubTitleStyle>{movie.data?.release_date}</SubTitleStyle>
        <SubTitleStyle>{`평점 ${movie.data?.vote_average}`}</SubTitleStyle>
        <SubTitleStyle>{`${movie.data?.runtime}분`}</SubTitleStyle>
        <SubTitleStyle>{movie.data?.tagline}</SubTitleStyle>
        <ContentStyle>{movie.data?.overview}</ContentStyle>
      </DetailHead>
      <DetailBody>
        <TitleStyle>감독/출연</TitleStyle>
        <CastCard cast={cast}></CastCard>
      </DetailBody>
    </DetailWrapper>
  );
};

export default MovieDetail;
