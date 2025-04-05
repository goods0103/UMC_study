import { useContext } from "react";
import styled from "styled-components";
import { CiSquarePlus } from "react-icons/ci";
import { TodoContext } from "../context/TodoContext";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vh;
  height: 4vh;
  border: 1px solid #007bff; /* 파란 테두리 */
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 부드러운 음영 */
  padding: 0 1rem;
  border-radius: 10px;
`;
const InputStyle = styled.input`
  width: 90%;
  height: 90%;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid #007bff; /* 파란 테두리 */
`;

const Header = () => {
  const { addTodo, setText, text, handleSubmit } = useContext(TodoContext);
  return (
    <HeaderStyle>
      <FormStyle onSubmit={handleSubmit}>
        <InputStyle
          placeholder="할일을 입력해주세요!"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <CiSquarePlus
          onClick={() => addTodo()}
          type="submit"
          size={50}
          color="skyblue"
        />
      </FormStyle>
    </HeaderStyle>
  );
};
export default Header;
