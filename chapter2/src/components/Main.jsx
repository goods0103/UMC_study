import styled from "styled-components";
import { useContext } from "react";
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";
import UpdateInput from "./Inputs/UpdateInput";
import { TodoContext } from "../context/TodoContext";

const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = () => {
  const { editingId, todos } = useContext(TodoContext);
  return (
    <>
      {todos.map(({ id, task }) => (
        <TodoWrapper key={id}>
          {editingId !== id && (
            <TodoBox>
              <p>{id}.</p>
              <p>{task}</p>
            </TodoBox>
          )}
          {editingId === id && (
            <TodoBox>
              <p>{id}.</p>
              <UpdateInput task={task}></UpdateInput>
            </TodoBox>
          )}
          <DeleteButton id={id}></DeleteButton>
          <UpdateButton id={id}></UpdateButton>
        </TodoWrapper>
      ))}
    </>
  );
};
export default Main;
