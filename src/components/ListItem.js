import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deccrease, increase, RemoveToCart } from "../actions/cart";

import Trash from "./icons/Trash";

const ListItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <ProductDetail>
        <div className="image">
          <img src={item.image} />
        </div>
        <div className="product-detail__name">{item.name}</div>
      </ProductDetail>
      <ProductQuantity>
        <button disabled={item.count == 1} onClick={() => dispatch(deccrease(item))}>-</button>
        <input type="text" value={item.count} readOnly />
        <button onClick={() => dispatch(increase(item))}>+</button>
      </ProductQuantity>
      <ProductPrice>${(item.price * item.count).toFixed(2)}</ProductPrice>
      <ProductAction>
        <button onClick={() => dispatch(RemoveToCart(item.key))}>
          <Trash />
        </button>
      </ProductAction>
    </Box>
  );
};

export default ListItem;

const Box = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 20px;
  align-items: center;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;

  & > .image {
    & > img {
      border-radius: 4px;
      max-width: 110px;
      width: 100%;
    }
  }
`;
const ProductQuantity = styled.div`
  & > button {
    color: #9ca3af;
    font-size: 15px;
  }
  & > input {
    text-align: center;
    width: 30px;
    color: #9ca3af;
    border: 1px solid #d1d5db;
    border-radius: 4px;
  }
`;
const ProductPrice = styled.div`
  color: #9ca3af;
`;
const ProductAction = styled.div`
  & > button {
    & > svg {
      width: 20px;
      height: 20px;
      color: #f87171;
    }
  }
`;
