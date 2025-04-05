import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import { TodoContext } from "../context/TodoContext";

const Layout = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <>
      <Header />
      <Main todos={todos} setTodos={setTodos} />
      <Footer />
    </>
  );
};

export default Layout;
