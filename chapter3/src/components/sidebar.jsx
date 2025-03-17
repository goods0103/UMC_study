import styled from "styled-components";

const SideStyle1 = styled.div`
  background-color: grey;
`;

const Sidebar = () => {
  return (
    <SideStyle1>
      <div>찾기</div>
      <div>영화</div>
    </SideStyle1>
  );
};
export default Sidebar;
