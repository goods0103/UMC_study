import styled from "styled-components";
import { Link } from "react-router-dom";

const CardBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); // 카드 크기에 따라 자동 배치
  gap: clamp(10px, 2vw, 20px); // 최소 10px, 최대 30px, 화면 너비에 따라
  align-items: flex-start;
`;

const CardBox = styled(Link)`
  width: 100%;
  height: 400px;
`;

const ImgStyle1 = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover; /* 비율 유지하면서 꽉 채움 */
  border-radius: 10px;
`;

const MovieInfo1 = styled.div`
  width: 100%;
  color: white;
`;

const Card = ({ movies }) => {
  return (
    <CardBody>
      {movies.data?.results.map((movies) => (
        <CardBox to={`/movies/${movies.id}`} key={movies.id}>
          <ImgStyle1
            src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          />
          <MovieInfo1>{movies.title}</MovieInfo1>
          <MovieInfo1>{movies.release_date}</MovieInfo1>
        </CardBox>
      ))}
    </CardBody>
  );
};

export default Card;
