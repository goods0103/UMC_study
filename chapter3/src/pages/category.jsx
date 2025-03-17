import styled from "styled-components";

const CategoryboxStyle = styled.div`
  display: flex;
`;

const CategoryStyle1 = styled.div`
  background-color: grey;
`;
const CategoryPage = () => {
  return (
    <>
      <h1>카테고리</h1>
      <CategoryboxStyle>
        <CategoryStyle1>a</CategoryStyle1>
        <CategoryStyle1>a</CategoryStyle1>
        <CategoryStyle1>a</CategoryStyle1>
        <CategoryStyle1>a</CategoryStyle1>
      </CategoryboxStyle>
    </>
  );
};
export default CategoryPage;
