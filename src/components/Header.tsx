import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #efefef;
  color: #000;
  font-size: 120%;
  font-style: italic;
  border-bottom: 5px solid #242424;
  text-align: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Header = () => {
  return <StyledHeader>Shopex</StyledHeader>;
};

export default Header;
