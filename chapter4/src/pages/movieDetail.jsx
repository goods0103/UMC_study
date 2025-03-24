import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DetailHead = styled.div`
  background-image: url(${(props) =>
    `https://image.tmdb.org/t/p/original/${props.$imgpath}`});
  background-size: cover; /* 혹은 contain */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  background-position: center; /* 이미지 중앙 정렬 */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30vh;
  border-radius: 10px;
  padding: 1em;
  gap: 10px;
  overflow-y: auto;
`;

const DetailBody = styled.div`
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
`;

const TitleStyle = styled.div`
  font-family: "Roboto", sans-serif; // 고딕체 스타일의 폰트
  font-weight: bold; // 볼드 처리
  font-size: 48px; // 크기 조정
  color: white; // 하얀색
  text-align: start; // 중앙 정렬
  -webkit-text-stroke: 0.5px black;
`;

const SubTitleStyle = styled.div`
  font-family: "Roboto", sans-serif; // 고딕체 스타일의 폰트
  font-weight: bold; // 볼드 처리
  font-size: 20px; // 크기 조정
  color: white; // 하얀색
  text-align: left; // 중앙 정렬
  -webkit-text-stroke: 0.5px black;
`;

const ContentStyle = styled.div`
  font-family: "Roboto", sans-serif; // 고딕체 스타일의 폰트
  font-weight: bold; // 볼드 처리
  font-size: 18px; // 크기 조정
  color: white; // 하얀색
  text-align: left; // 중앙 정렬
  -webkit-text-stroke: 0.5px black;
  max-width: 40%; /* 설명이 너무 길어지지 않도록 제한 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  margin-top: 30px;
`;

const ImgBox = styled.div`
  width: 100px;
  height: 200px;
`;

const ImgStyle = styled.img`
  width: 100px; /* 이미지의 크기 */
  height: 100px; /* 이미지의 크기 */
  border-radius: 50%; /* 원형으로 만들기 */
  object-fit: cover; /* 이미지가 영역을 채우도록 설정 */
  border: 5px solid white;
`;

const MovieDetail = () => {
  const params = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${params.movieId}?language=ko-KR`);

  const { data: cast } = useCustomFetch(
    `/movie/${params.movieId}/credits?language=ko-KR`
  );

  console.log(movie.data);
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
        <ImgBox>
          {cast.data?.cast.map((casts) => (
            <ImgStyle
              key={casts.id}
              src={`https://image.tmdb.org/t/p/w200/${casts.profile_path}`}
            />
          ))}
        </ImgBox>
      </DetailBody>
    </DetailWrapper>
  );
};
export default MovieDetail;
