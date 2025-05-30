import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
      .min(8, "비밀번호는 8~16자 사이로 입력해주세요!")
      .max(16, "비밀번호는 8~16자 사이로 입력해주세요!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
