import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Back from "./icons/Back";
import ListItem from "./ListItem";

const ShoppingList = ({ cart }) => {
  return (
    <Wrap>
      
      <Link to="/">
        <BackShopping>
          <Back />
          Continue Shopping
        </BackShopping>
      </Link>

      <Title>
        <span>Shopping Cart</span>
        {cart.length > 0 && <span>{cart.length} Items</span>}
      </Title>

      {cart.length > 0 ? (
        <List>
          <div className="list__title">
            <div>PRODUCT DETAILS</div>
            <div>QUANTITY</div>
            <div>PRICE</div>
            <div>TOTAL</div>
          </div>
          {cart.map((item) => {
            return <ListItem key={item.key} item={item} />;
          })}
        </List>
      ) : (
        <Empty>Your cart is empty</Empty>
      )}

    </Wrap>
  );
};

export default ShoppingList;

const Wrap = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  border-radius: 4px;
  padding: 40px;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-weight: 500;
  font-size: 24px;
`;
const List = styled.div`
  padding: 20px 0;
  & > .list__title {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    & > div {
      color: #718096;
      font-size: 12px;
    }
  }
`;

const BackShopping = styled.div`
  display: flex;
  align-items: center;
  color: #a0aec0;
  margin-bottom: 15px;
  font-size: 14px;
  & > svg {
    height: 20px;
    margin-top: 3px;
    width: 20px;
  }
`;

const Empty = styled.div`
  padding: 20px;
  background: #fff3d5;
  margin: 10px;
  border-radius: 4px;
  color: #a67806;
  font-weight: 500;
  font-size: 15px;
`;
