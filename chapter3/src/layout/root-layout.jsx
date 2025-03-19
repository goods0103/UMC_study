import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1; /* 남은 공간을 모두 차지 */
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background-color: grey;
  overflow-y: auto;
`;

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </Layout>
    </>
  );
};
export default RootLayout;
