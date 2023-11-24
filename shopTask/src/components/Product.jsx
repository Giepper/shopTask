import styled from "styled-components";
import productsData from "../../public/products.json";
import { useEffect, useState } from "react";

const StyledProductWrapper = styled.div`
  width: 300px;
  height: auto;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: #000;
  font-family: "Lato", sans-serif;
  padding: 0.5rem;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 350px;
`;

const ProductTitle = styled.h2`
  width: 100%;
  text-align: left;
  padding-left: 1rem;
  font-weight: 300;
  border: 1px solid blue;
`;

const ProductPrice = styled.p`
  width: 100%;
  font-size: 20px;
  text-align: left;
  padding-left: 1rem;
  font-style: italic;
  font-weight: 400;
  border: 1px solid red;
`;
const AddProduct = styled.p`
  width: 100%;
`;

const FontAwesomeIcon = styled.i``;
console.log(productsData.products[0].price);

const Product = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const GetJsonData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch();

        // Sprawdzanie, czy odpowiedź serwera jest ok
        if (!response.ok) {
          throw new Error("Blad pobierania danych:", response.statusText);
        }
        return productsData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    GetJsonData()
      .then((data) => {
        setJsonData(data);
        console.log(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(jsonData);
  function GetProductInfo() {
    for (let x = 0; x < productsData.products.length; x++) {
      return (
        <>
          {(() => {
            const products = [];
            for (let x = 0; x < productsData.products.length; x++) {
              products.push(
                <StyledProductWrapper>
                  <ProductImage src={productsData.products[x].photo} />
                  <ProductPrice>{productsData.products[x].price}</ProductPrice>
                  <ProductTitle>{productsData.products[x].name}</ProductTitle>
                </StyledProductWrapper>
              );
            }
            return products;
          })()}
        </>
      );
    }
  }

  return (
    <>
      <GetProductInfo />
    </>
  );
};

export default Product;
