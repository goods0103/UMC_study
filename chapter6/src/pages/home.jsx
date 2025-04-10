import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const HomePage = () => {
  const { isLogin } = useContext(AuthContext);

  console.log(isLogin);
  return (
    <>
      <h1 color="red">홈 페이지1</h1>
    </>
  );
};
export default HomePage;
