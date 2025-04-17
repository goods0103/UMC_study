import CardSkeleton from "./card-skeleton.jsx";
import styled from "styled-components";

// const CardBody = styled.div`
//   display: grid;
//   width: 100%;
//   grid-template-columns: repeat(
//     auto-fill,
//     minmax(200px, 1fr)
//   ); // 카드 크기에 따라 자동 배치
//   gap: clamp(10px, 2vw, 20px); // 최소 10px, 최대 30px, 화면 너비에 따라
//   align-items: flex-start;
// `;

const CardListSkeleton = ({ number }) => {
  return (
    // <CardBody>
    <>
      {new Array(number).fill(0).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </>

    // </CardBody>
  );
};

export default CardListSkeleton;
