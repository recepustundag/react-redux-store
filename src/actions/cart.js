import * as types from "./types";

export const AddToCart = (list) => {
  return {
    type: types.ADD_TO_CART,
    payload: list,
  };
};

export const RemoveToCart = (id) => {
  return {
    type: types.REMOVE_TO_CART,
    payload: id,
  };
};

export const increase = (item) => {
  return {
    type: types.INCREASE_TO_CART,
    payload: item,
  };
};

export const deccrease = (id) => {
  return {
    type: types.DECREASE_TO_CART,
    payload: id,
  };
};
