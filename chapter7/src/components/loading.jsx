import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  width: 100%;
  heigth: 100%;
  margin: auto;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <BeatLoader color="#9747FF" size={30} />
    </LoadingWrapper>
  );
};
export default Loading;
