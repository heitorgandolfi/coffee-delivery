import { createStore } from "effector";

import { AddToCartModel } from "./addToCartState";
import { loadAddToCart, loadAddToCartDone, loadAddToCartFail } from "./addToCartEvents";

const initialState: AddToCartModel = {
  isLoading: false,
  orderItems: [],
  hasError: false,
  errorMessage: "",
};

export const AddToCartStore = createStore<AddToCartModel>(initialState)
  .on(loadAddToCart, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadAddToCartDone, (state, data) => ({
    ...state,
    isLoading: false,
    orderItems: [data, ...state.orderItems],
    hasError: false,
    errorMessage: "",
  }))
  .on(loadAddToCartFail, (state) => ({
    ...state,
    hasError: true,
    errorMessage: "Erro ao adicionar o produto. Tente novamente mais tarde.",
    isLoading: false,
  }));
