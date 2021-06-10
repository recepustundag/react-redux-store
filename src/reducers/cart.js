import * as types from "../actions/types";
import list from "../Utils/products";

const initialState = {
  productList: list,
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const index = state.cart.findIndex((item) => item.key === action.payload.key);
      return {
        ...state,
        cart: index == -1 ? [...state.cart, action.payload] : [...state.cart],
      };
    case types.REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.key != action.payload),
      };
    case types.INCREASE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.key === action.payload.key) {
            action.payload.count++;
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case types.DECREASE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.key === action.payload.key) {
            action.payload.count--;
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
