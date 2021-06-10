import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AddToCart } from "../actions/cart";
import BasketIcon from "./icons/BasketIcon";
import Check from "./icons/Check";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const index = cart.findIndex((item) => item.key === product.key);
  return (
    <Box>
      <Image>
        <img src={product.image} />
        {index == -1 ? (
          <Button onClick={() => dispatch(AddToCart(product))}>
            <BasketIcon />
          </Button>
        ) : (
          <Button className="active">
            <Check />
          </Button>
        )}
      </Image>
      <Title>{product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
    </Box>
  );
};

export default Products;

const Box = styled.div`
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
`;
const Image = styled.div`
  position: relative;

  & > img {
    width: 100%;
    height: 190px;
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: -10px;
  right: 10px;
  border: 0;
  background: #3182ce;
  border-radius: 99px;
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #2c70b0;
  }
  &.active{
    background: #26cb63;
  }
  & > svg {
    height: 17px;
    width: 17px;
  }
`;
const Title = styled.div`
  color: #4a5568;
  padding: 3px 5px;
  font-weight: 500;
`;
const Price = styled.span`
  color: #a0aec0;
  padding: 3px 5px 15px 5px;
  display: inline-block;
`;
