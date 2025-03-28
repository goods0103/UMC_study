import styled from "styled-components";
import { MdOutlineSearch, MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

const SideStyle1 = styled.div`
  background-color: #333333;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const SideStyle2 = styled(Link)`
  color: white;
  margin: 10px;
`;

const Sidebar = () => {
  return (
    <SideStyle1>
      <SideStyle2 to="/search">
        <MdOutlineSearch />
        찾기
      </SideStyle2>
      <SideStyle2 to="/movies">
        <MdLocalMovies />
        영화
      </SideStyle2>
    </SideStyle1>
  );
};
export default Sidebar;
