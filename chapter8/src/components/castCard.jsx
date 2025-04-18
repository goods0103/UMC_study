import styled from "styled-components";

const ImgBody = styled.div`
  display: grid; /* 그리드로 변경 */
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); /* 자동으로 아이템을 가로로 배치 */
  column-gap: 40px;
  row-gap: 10px;
  justify-items: center; /* 자식 요소들을 가로로 중앙 정렬 */
  // display: flex; /* Flexbox로 변경하여 가로 배치 */
  // gap: 40px; /* 각 이미지 간의 간격 */
  // align-items: flex-start;
  // flex-wrap: wrap; /* 내용이 많을 경우 줄바꿈 */
`;

const ImgBox = styled.div`
  width: 150px;
  height: 200px;
`;

const ImgStyle = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
`;

const ImgInfo = styled.div`
  width: 150px;
  color: white;
`;

const CastCard = ({ cast }) => {
  return (
    <ImgBody>
      {cast?.cast.map((casts) => (
        <ImgBox key={casts.id}>
          <ImgStyle
            src={`https://image.tmdb.org/t/p/w200/${casts.profile_path}`}
          ></ImgStyle>
          <ImgInfo>{casts.name}</ImgInfo>
          <ImgInfo>{casts.known_for_department}</ImgInfo>
        </ImgBox>
      ))}
    </ImgBody>
  );
};
export default CastCard;
