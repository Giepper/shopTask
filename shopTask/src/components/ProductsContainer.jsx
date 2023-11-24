import styled from "styled-components";
import Products from "./Product.jsx";

const StyledProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProductsContainer = () => {
  return (
    <StyledProductsContainer>
      <Products />
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
