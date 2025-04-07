import axios from "axios";
const HomePage = () => {
  const userData = {
    email: "d11121@gmail.com",
    password: "hihi",
    passwordCheck: "hihi",
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/register",
        userData
      );
      console.log(res.data);
    } catch (err) {
      console.error("에러 발생:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <h1 color="red">홈 페이지1</h1>
      <button onClick={() => handleSubmit()}>axios 요청</button>
    </>
  );
};
export default HomePage;
