import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";

const UpdateButton = ({ id }) => {
  const { editingId, seteditingId, updateTodo, editText } =
    useContext(TodoContext);
  // console.log(id);
  // console.log(editingId);
  return (
    <>
      {editingId === id ? (
        <Button
          variant="outline-primary"
          onClick={() => updateTodo(editingId, editText)}
        >
          수정 중
        </Button>
      ) : (
        <Button variant="primary" onClick={() => seteditingId(id)}>
          수정 진행
        </Button>
      )}
    </>
  );
};
export default UpdateButton;
