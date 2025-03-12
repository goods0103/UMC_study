import { Button } from "react-bootstrap";

const UpdateButton = ({
  editingId,
  id,
  seteditingId,
  updateTodo,
  editText,
}) => {
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
