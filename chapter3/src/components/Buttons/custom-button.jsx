import styled from "styled-components";
const StyledTag1 = styled.button`
  &:hover {
    text-decoration: underline;
  }
  background-color: ${(props) => props.color || "green"};
`;

const CustomButton = () => {
  return (
    <>
      <StyledTag1 color={"purple"}>커스텀 버튼</StyledTag1>;
      <StyledTag1>커스텀 버튼2</StyledTag1>
    </>
  );
};

export default CustomButton;
