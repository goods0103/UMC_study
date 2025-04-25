import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
//navbar style
const NavStyle1 = styled.nav`
  background-color: #333333;
  width: 100%;
  height: 6vh;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const LogoStyle = styled.div`
  color: #e50914;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem;
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
  const { isLogin, idKey, setIsLogin, userName, setUserName } =
    useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <NavStyle1>
      <LogoStyle onClick={() => navigate("/")}>Netflix</LogoStyle>
      {isLogin == true ? (
        <RightSection>
          <LoginStyle>{userName}님 반갑습니다</LoginStyle>
          <LoginStyle
            onClick={() => {
              setIsLogin(false);
              localStorage.removeItem(idKey);
              navigate("/");
            }}
          >
            로그아웃
          </LoginStyle>
        </RightSection>
      ) : (
        <RightSection>
          <LoginStyle onClick={() => navigate("/login")}>로그인</LoginStyle>
          <SignStyle onClick={() => navigate("/signup")}>회원가입</SignStyle>
        </RightSection>
      )}
    </NavStyle1>
  );
};
export default Navbar;
