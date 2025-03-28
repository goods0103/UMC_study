import styled from "styled-components";

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = () => {
  return (
    <ErrorWrapper>
      <h1 color="white">Error Page</h1>
    </ErrorWrapper>
  );
};
export default Error;
