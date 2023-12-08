import styled from "styled-components";
import productsData from "../../public/products.json";
import { useEffect, useState } from "react";
import ShopPage from "./ShopPage";

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

const StyledProductImage = styled.img`
  width: 300px;
  height: 350px;
`;

const StyledProductTitle = styled.h2`
  width: 100%;
  text-align: left;
  padding-left: 1rem;
  font-weight: 400;
`;

const StyledProductPrice = styled.p`
  width: 100%;
  font-size: 20px;
  text-align: left;
  padding-left: 1rem;
  font-style: italic;
  font-weight: 400;
`;

const StyledProductSize = styled.p`
  width: 100%;
  font-size: 20px;
  text-align: right;
  padding-right: 1rem;
  font-style: italic;
  font-weight: 400;
`;

// const StyledHref = styled.a`
//   color: #000;
//   &:hover {
//     color: #aaa;
//   }
`;
// const AddProduct = styled.p`;
//   width: 100%;
// `;

// const FontAwesomeIcon = styled.i``;
console.log(productsData.products[0].price);

const Product = () => {
  const [jsonData, setJsonData] = useState();
  const [isProductClicked, setIsProductClicked] = useState(false);
  const [productInfoTitle, SetProductInfoTitle] = useState("");
  const [productInfoPrice, setProductInfoPrice] = useState(0);
  const [productInfoPhoto, setProductInfoPhoto] = useState("");
  const [productInfoSizeSQuantity, setProductInfoSizeSQuantity] = useState(0);
  const [productInfoSizeMQuantity, setProductInfoSizeMQuantity] = useState(0);
  const [productInfoSizeLQuantity, setProductInfoSizeLQuantity] = useState(0);

  useEffect(() => {
    const GetJsonData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch({ productsData });

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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function GetProductInfo() {
    if (jsonData && jsonData.products && jsonData.products.length > 0) {
      console.log(jsonData.products[0]);

      for (let x = 0; x < jsonData.products.length; x++) {
        return (
          <>
            {(() => {
              const products = [];
              for (let x = 0; x < jsonData.products.length; x++) {
                products.push(
                  <StyledProductWrapper
                    key={x}
                    onClick={() => {
                      setIsProductClicked(true);
                      SetProductInfoTitle(jsonData.products[x].name);
                      setProductInfoPrice(jsonData.products[x].price);
                      setProductInfoPhoto(jsonData.products[x].photo);
                      setProductInfoSizeSQuantity(
                        jsonData.products[x].size[0].s
                      );
                      setProductInfoSizeMQuantity(
                        jsonData.products[x].size[1].m
                      );
                      setProductInfoSizeLQuantity(
                        jsonData.products[x].size[2].l
                      );
                    }}
                  >
                    <StyledProductImage src={jsonData.products[x].photo} />
                    <StyledProductPrice>
                      {jsonData.products[x].price} PLN
                    </StyledProductPrice>
                    <StyledProductTitle>
                      {jsonData.products[x].name}
                    </StyledProductTitle>
                    <StyledProductSize>S / M / L</StyledProductSize>
                  </StyledProductWrapper>
                );
              }
              return products;
            })()}
          </>
        );
      }
    }
  }

  return (
    <>
      {isProductClicked ? (
        <ShopPage
          title={productInfoTitle}
          price={productInfoPrice}
          photo={productInfoPhoto}
          sq={productInfoSizeSQuantity}
          mq={productInfoSizeMQuantity}
          lq={productInfoSizeLQuantity}
        />
      ) : (
        <GetProductInfo />
      )}
    </>
  );
};

export default Product;
