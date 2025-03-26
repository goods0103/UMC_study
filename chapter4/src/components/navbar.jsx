import { Link } from "react-router-dom";
import styled from "styled-components";

//navbar style
const NavStyle1 = styled.nav`
  background-color: #555555;
  height: 40px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: relative;
`;

const LogoStyle1 = styled(Link)`
  color: #f472b6;
  font-weight: bold;
  padding: 10px 20px;
`;

const RightSection = styled.div`
  display: flex;
  text-align: center;
`;

const LoginStyle1 = styled(Link)`
  &:hover {
    background-color: pink;
  }
  background: transparent;
  padding: 10px 10px;
  color: white;
  height: 100%;
`;
const SignStyle1 = styled(Link)`
  background: transparent;
  padding: 10px 10px;
  color: red;
  height: 100%;
`;
const Navbar = () => {
  return (
    <NavStyle1>
      <LogoStyle1 to={"/"}>Netflix</LogoStyle1>
      <RightSection>
        <LoginStyle1 to="/login">로그인</LoginStyle1>
        <SignStyle1 to="/signup">회원가입</SignStyle1>
      </RightSection>
    </NavStyle1>
  );
};
export default Navbar;
