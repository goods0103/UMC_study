import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//navbar style
const NavStyle1 = styled.nav`
  background-color: #333333;
  width: 100%;
  height: 4vh;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const LogoStyle = styled.div`
  color: #e50914;
  font-weight: bold;
  font-size: 21px;
  padding: 1em;
`;

const RightSection = styled.div`
  display: flex;
  height: 100%;
  text-align: center;
  padding: 1em;
  justify-content: center;
  gap: 20px;
`;

const LoginStyle = styled.div`
  margin: auto;
  text-align: center;
  background: transparent;
  font-size: 15px;
  color: white;
`;
const SignStyle = styled.button`
  text-align: center;
  &:hover {
    background-color: pink;
  }
  margin: auto;
  background: #e50914;
  font-size: 15px;
  color: white;
  border-radius: 5px;
`;
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavStyle1>
      <LogoStyle onClick={() => navigate("/")}>Netflix</LogoStyle>
      <RightSection>
        <LoginStyle onClick={() => navigate("/login")}>로그인</LoginStyle>
        <SignStyle onClick={() => navigate("/signup")}>회원가입</SignStyle>
      </RightSection>
    </NavStyle1>
  );
};
export default Navbar;
