import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//yup이라는 유효성 검사 라이브러리 사용

const SignUpPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("이메일을 반드시 입력해주세요"),
    password: yup
      .string()
      .min(8, "비밀번호는 8자리 이상이여야 합니다")
      .max(16, "비밀번호는 16자리 미만이여야 합니다")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("폼 데이터 제출");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} />
      <p style={{ color: "white" }}>{errors.email?.message}</p>
      <input type="password" {...register("password")} />
      <p style={{ color: "white" }}>{errors.password?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default SignUpPage;
