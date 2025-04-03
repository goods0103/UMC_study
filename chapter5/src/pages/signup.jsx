///import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useState } from "react";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";

//yup이라는 유효성 검사 라이브러리 사용
const SignUpContainer = styled.div`
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
`;

const SignText = styled.div`
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
  border-radius: 4px;
  border: ${(props) => (props.error ? "4px solid red" : "1px solid #ccc")};
  &:focus {
    border-color: #007bff;
  }
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

const SignUpPage = () => {
  // const schema = yup.object().shape({
  //   email: yup.string().email().required("이메일을 반드시 입력해주세요"),
  //   password: yup
  //     .string()
  //     .min(8, "비밀번호는 8자리 이상이여야 합니다")
  //     .max(16, "비밀번호는 16자리 미만이여야 합니다")
  //     .required(),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = (data) => {
  //   console.log("폼 데이터 제출");
  //   console.log(data);
  // };
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  console.log(login.values, login.errors, login.touched);
  return (
    <SignUpContainer>
      <SignText style={{ color: "white" }}>회원가입</SignText>
      <FormContainer>
        <InputText
          error={login.touched.email && login.errors.email}
          type={"email"}
          placeholder="이메일을 입력해주세요"
          {...login.getTextIputProps("email")}
        />
        {login.touched.email && login.errors.email && (
          <ErrorText>{login.errors.email}</ErrorText>
        )}
        <InputText
          error={login.touched.password && login.errors.password}
          type={"password"}
          placeholder="비밀번호를 입력해주세요"
          {...login.getTextIputProps("password")}
        />
        {login.touched.password && login.errors.password && (
          <ErrorText>{login.errors.password}</ErrorText>
        )}
      </FormContainer>
    </SignUpContainer>
  );
};
export default SignUpPage;
