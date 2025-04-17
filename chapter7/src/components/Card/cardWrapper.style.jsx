import styled from "styled-components";

const CardsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); // 카드 크기에 따라 자동 배치
  gap: clamp(10px, 2vw, 20px); // 최소 10px, 최대 30px, 화면 너비에 따라
  align-items: flex-start;
`;
export { CardsWrapper };
