import { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

  textarea {
    border-radius: 3px;
    border: 1px solid #ccc;
  }
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

const Card = ({ todo, onDelete, onModify }) => {
  const navigate = useNavigate();
  const title = useRef();
  const content = useRef();
  const isCheck = useRef();
  //수정상태
  const [isModify, setIsModify] = useState(false);

  const handleInput = () => {
    setIsModify(true);
  };

  const handleSave = () => {
    setIsModify(false);
    onModify({
      id: todo.id,
      title: title.current.value,
      content: content.current.value,
      isCheck: isCheck.current.checked,
    });
  };

  const handleDetail = (id) => {
    navigate(`/about/${id}`);
  };

  return (
    <CardBox>
      <input type="checkbox" ref={isCheck} defaultChecked={todo.checked} />
      <TextBox>
        {isModify ? (
          <>
            <input type="text" defaultValue={todo.title} ref={title} />
            <input type="text" defaultValue={todo.content} ref={content} />
          </>
        ) : (
          <>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
          </>
        )}
      </TextBox>
      <ButtonBox>
        <button onClick={isModify ? handleSave : handleInput}>
          {isModify ? "저장" : "수정"}
        </button>
        <button onClick={() => onDelete(todo.id)}>삭제</button>
        <button onClick={() => handleDetail(todo.id)}>상세</button>
      </ButtonBox>
    </CardBox>
  );
};
export { Card };
