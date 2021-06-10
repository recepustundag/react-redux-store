import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductList from "../components/ProductList";

const Home = () => {
  const productList = useSelector((state) => state.cart.productList);
  return (
    <>
      <Title>Product List</Title>
      <Subtitle>16 Items</Subtitle>
      <ProductList productList={productList} />
    </>
  );
};

export default Home;

const Title = styled.div`
  font-size: 24px;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 5px;

`

const Subtitle = styled.div`
  color: #a0aec0;
  margin-bottom: 10px;

`