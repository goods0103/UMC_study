import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styled from "styled-components";

const LayoutWarpper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainLayout = styled.main`
  flex-grow: 1;
  width: 100%;
`;

const RootLayout = () => {
  return (
    <LayoutWarpper>
      <Header />
      <MainLayout>
        <Outlet /> {/* 각 페이지가 여기에 렌더링 됨 */}
      </MainLayout>
      <Footer />
    </LayoutWarpper>
  );
};

export default RootLayout;
