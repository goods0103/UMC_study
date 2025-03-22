import styled from "styled-components";

const ImgStyle1 = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover; /* 비율 유지하면서 꽉 채움 */
  border-radius: 10px;
`;

const MovieInfo1 = styled.div`
  width: 200px;
  color: white;
`;

const Card = ({ movies }) => {
  return (
    <>
      {movies.data?.results.map((movies) => (
        <div key={movies.id}>
          <ImgStyle1
            src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
          />
          <MovieInfo1>{movies.title}</MovieInfo1>
          <MovieInfo1>{movies.release_date}</MovieInfo1>
        </div>
      ))}
    </>
  );
};

export default Card;
