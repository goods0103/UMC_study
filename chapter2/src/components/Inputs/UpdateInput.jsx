import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const UpdateInput = ({ task }) => {
  const { seteditText } = useContext(TodoContext);
  return (
    <input
      defaultValue={task}
      onChange={(e) => {
        seteditText(e.target.value);
        console.log(e);
      }}
    ></input>
  );
};
export default UpdateInput;
