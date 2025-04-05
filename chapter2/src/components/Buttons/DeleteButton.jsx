import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";
// 버튼 컴포넌트
const DeleteButton = ({ id }) => {
  const { deleteTodo } = useContext(TodoContext);
  return <button onClick={() => deleteTodo(id)}>삭제하기</button>;
};
export default DeleteButton;
