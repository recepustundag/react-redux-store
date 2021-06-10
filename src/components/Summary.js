import React from "react";
import styled from "styled-components";

const Basket = ({cart}) => {
  const total = cart.reduce(function(res,item) {
    return res + (item.price * item.count);
  }, 0);
  return (
    <Box>
      <Title>Order Summary</Title>
      <Total>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </Total>
    </Box>
  );
};

export default Basket;

const Box = styled.div`
  padding: 40px;
  background: #e5e7eb;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
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
const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  border-top: 1px solid #9ca3af;
  margin-top: 10px;
  padding-top: 10px;
`;
