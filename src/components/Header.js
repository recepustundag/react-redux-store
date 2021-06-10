import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BasketIcon from "./icons/BasketIcon";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Container>
      <Link to="/card">
        <Box>
          <BasketIcon />
          {cart.length > 0 && <Count>{cart.length}</Count>}
        </Box>
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Box = styled.div`
  position: relative;

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

const Count = styled.div`
  position: absolute;
  bottom: -5px;
  right: -8px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3182ce;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  line-height: 1;
`;
