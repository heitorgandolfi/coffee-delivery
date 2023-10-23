import { mockData } from "../../data/mock/products";
import {
  loadAddToCart,
  loadAddToCartDone,
  loadAddToCartFail,
} from "../../stores/addToCartStore/addToCartEvents";

const execute = async (productId: string): Promise<void> => {
  loadAddToCart();
  try {
    const selectedProduct = mockData.find((item) => item.id === productId);

    selectedProduct && loadAddToCartDone(selectedProduct);
  } catch (error) {
    loadAddToCartFail();
    console.log(error);
  }
};

export const AddToCartUseCase = {
  execute,
};
