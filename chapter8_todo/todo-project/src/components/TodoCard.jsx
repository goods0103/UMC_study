import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vh;
  height: 7vh;
  padding: 0 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextBox = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  max-height: 5vh;
  overflow: hidden;
  font-size: 14px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;

  button {
    background-color: grey;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 8px;
    cursor: pointer;
  }
`;

const Card = ({ todo }) => {
  return (
    <CardBox>
      <input type="checkbox" />
      <TextBox>
        <div>{todo.title}</div>
        <div>{todo.content}</div>
      </TextBox>
      <ButtonBox>
        <button>수정</button>
        <button>삭제</button>
      </ButtonBox>
    </CardBox>
  );
};
export { Card };
