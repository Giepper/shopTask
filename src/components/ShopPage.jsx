import { useState } from "react";
import styled from "styled-components";
// import Product from "./Product";
// import productsData from "../../public/products.json";

// console.log(productsData.products[0].price);

const StyledContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledInsideContainer = styled.div`
  width: 50%;
  height: 100%;
  &:last-child {
    padding: 1rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledTitle = styled.p`
  color: #fff;
  text-align: left;
  font-weight: 300;
  font-style: italic;
  font-size: 2rem;
`;
const StyledSizeContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
`;
const StyledSize = styled.button`
  width: 100px;
`;
const StyledBuyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const StyledQuantityContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const StyledQuantityBtn = styled.button``;
const StyledQuantityInput = styled.input`
  height: 40px;
  text-align: center;
`;
const StyledBuyButton = styled.button`
  width: 100%;
  margin-top: 1rem;
`;
const StyledLowQuantityPanel = styled.div`
  width: 90%;
  background-color: #ebe3b0;
  color: #db6868;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  border-radius: 0.25rem;
`;
let x = 1;

const ShopPage = ({ title, price, photo, sq, mq, lq }) => {
  console.log(title);

  const [isLowQuantity, setIsLowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [counter, setCounter] = useState(1);

  const CheckQuantity = (e) => {
    console.log(e.target.value);
    if (e.target.value <= 10) {
      setIsLowQuantity(true);
      setQuantity(e.target.value);
    } else {
      setIsLowQuantity(false);
    }
  };
  const ChangeAmount = (e) => {
    switch (e.target.value) {
      case "+":
        x++;
        setCounter(x);
        break;
      case "-":
        if (x > 1) {
          x--;
          setCounter(x);
        }
        break;
    }
  };

  return (
    <StyledContainer>
      <StyledInsideContainer>
        <StyledImage src={photo} />
      </StyledInsideContainer>
      <StyledInsideContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledSizeContainer>
          <StyledSize onClick={CheckQuantity} value={sq}>
            S
          </StyledSize>
          <StyledSize onClick={CheckQuantity} value={mq}>
            M
          </StyledSize>
          <StyledSize onClick={CheckQuantity} value={lq}>
            L
          </StyledSize>
        </StyledSizeContainer>
        {isLowQuantity && (
          <StyledLowQuantityPanel>
            MAŁA ILOŚĆ W MAGAZYNIE: {quantity} SZTUK
          </StyledLowQuantityPanel>
        )}
        <StyledBuyContainer>
          <StyledQuantityContainer>
            <StyledQuantityBtn onClick={ChangeAmount} value={"-"}>
              -
            </StyledQuantityBtn>
            <StyledQuantityInput maxLength={2} size={2} value={counter} />
            <StyledQuantityBtn onClick={ChangeAmount} value={"+"}>
              +
            </StyledQuantityBtn>
          </StyledQuantityContainer>
          <StyledQuantityContainer>
            {(price * counter).toFixed(2)} PLN
          </StyledQuantityContainer>
          <StyledBuyButton>Dodaj do koszyka</StyledBuyButton>
        </StyledBuyContainer>
      </StyledInsideContainer>
    </StyledContainer>
  );
};

export default ShopPage;
