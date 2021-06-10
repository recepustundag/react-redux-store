import React from "react";
import styled from "styled-components";
import Summary from "../components/Summary";
import ShoppingList from "../components/ShoppingList";
import { useSelector } from "react-redux";

const Card = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Wrapper>
      <ShoppingList cart={cart} />
      <Summary cart={cart} />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  margin-top: 40px;
`;
