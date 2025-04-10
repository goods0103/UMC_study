import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  height: 30vh; /* 부모 요소의 높이 지정 */
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const LoginText = styled.div`
  color: white;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const InputText = styled.input`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  width: 38vh;
  height: 4vh;
  border-radius: 10px;
`;

const SubmitText = styled.input`
  &:hover {
    background-color: #aec6cf;
  }
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: white;
  width: 38vh;
  height: 4vh;
  border-radius: 10px;
  background-color: rgb(230, 9, 101);
`;

const ErrorText = styled.h1`
  color: red;
  font-size: 12px;
`;

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
      .required("이메일을 입력해주세요!"),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요!")
      .min(1, "비밀번호는 1~3자 사이로 입력해주세요!")
      .max(3, "비밀번호는 1~3자 사이로 입력해주세요!"),
  });

  const navigate = useNavigate();

  const { idKey, setIdKey, setIsLogin, setUserName } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const saveUserToken = ({ res, data }) => {
    //로컬스토리지에 저장 key == id
    const key = data.email.split("@")[0];
    localStorage.setItem(key, JSON.stringify(res.data));
    setIdKey(key);
  };

  useEffect(() => {
    if (idKey) {
      const setUser = async () => {
        try {
          console.log("idKey: ", idKey);
          const Authheader = `Bearer ${
            JSON.parse(localStorage.getItem(idKey)).accessToken
          }`;

          const res = await axios.get("http://localhost:3000/user/me", {
            headers: {
              Authorization: Authheader,
            },
          });
          if (res.status == 200) {
            console.log(res.data.email);
            setUserName(res.data.email);
          }
        } catch (e) {
          console.log("error :", e.response);
        } finally {
        }
      };
      setUser();
    }
  }, [idKey]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", data);
      // console.log(res.data);
      // console.log(res.status);
      if (res.status == 201) {
        saveUserToken({ res, data });
        setIsLogin(true);
        navigate("/");
      }
    } catch (e) {
      console.log("에러 : ", e.response.data);
      alert(e.response.data.message);
      reset();
    } finally {
    }
  };

  return (
    <LoginContainer>
      <LoginText>로그인</LoginText>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
        ></InputText>
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        <InputText
          onBlur={() => handleBlur("password")}
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
        ></InputText>
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        <SubmitText type="submit" value={"로그인"}></SubmitText>
      </FormContainer>
    </LoginContainer>
  );
};
export default LoginPage;
