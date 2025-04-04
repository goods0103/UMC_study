import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryboxStyle = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  flex-wrap: wrap; /* 화면이 작아지면 자동 줄 바꿈 */
  gap: 20px; /* 박스 간격 */
  width: 100%;
`;

const CategoryStyle1 = styled(Link)`
  display: flex;
  justify-content: ; /* 중앙 정렬 */
  align-items: flex-end; /* 텍스트를 아래쪽에 정렬 */
  padding: 10px;
  background-color: pink;
  width: 900px;
  height: 250px;
  border-radius: 20px;
  flex: 1; /* 박스들이 균등한 크기로 배치됨 */
`;

const CategoryTagStyle = styled.div`
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  background-color: darkgrey;
  color: white;
  width: 150px;
  height: 30px;
  border-radius: 10px;
`;

const CategoryPage = () => {
  const location = useLocation();
  const isCategoryPage = location.pathname === "/movies";

  return (
    <>
      {isCategoryPage && (
        <CategoryWrapper>
          <h3>카테고리</h3>
          <CategoryboxStyle>
            <CategoryStyle1 to="/movies/now-playing">
              <CategoryTagStyle>현재 상영중인</CategoryTagStyle>
            </CategoryStyle1>
            <CategoryStyle1 to="/movies/popular">
              <CategoryTagStyle>인기 있는</CategoryTagStyle>
            </CategoryStyle1>
            <CategoryStyle1 to="/movies/top-rated">
              <CategoryTagStyle>높은 평가를 받은</CategoryTagStyle>
            </CategoryStyle1>
            <CategoryStyle1 to="/movies/up-coming">
              <CategoryTagStyle>개봉 예정중인</CategoryTagStyle>
            </CategoryStyle1>
          </CategoryboxStyle>
        </CategoryWrapper>
      )}
      <Outlet />
    </>
  );
};
export default CategoryPage;
