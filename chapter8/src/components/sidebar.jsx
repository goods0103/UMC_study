import styled from "styled-components";
import { MdOutlineSearch, MdOutlineMovie } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SideStyle1 = styled.div`
  background-color: #333333;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const SideButton = styled.div`
  background-color: transparent;
  color: white;
  margin: 10px;
`;

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <SideStyle1>
      <SideButton onClick={() => navigate("/search")}>
        <MdOutlineSearch />
        찾기
      </SideButton>
      <SideButton onClick={() => navigate("/movies")}>
        <MdOutlineMovie />
        영화
      </SideButton>
      <SideButton onClick={() => navigate("/todo")}>Todo</SideButton>
    </SideStyle1>
  );
};
export default Sidebar;
