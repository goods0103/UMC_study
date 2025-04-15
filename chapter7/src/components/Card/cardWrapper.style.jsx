import styled from "styled-components";

const CardsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: clamp(10px, 2vw, 20px);
  align-items: start;
`;
export { CardsWrapper };
