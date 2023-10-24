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

    if (selectedProduct && selectedProduct.quantity > 0) {
      loadAddToCartDone(selectedProduct);
    } else {
      alert("Select one item at least");
    }
  } catch (error) {
    loadAddToCartFail();
    console.log(error);
  }
};

export const AddToCartUseCase = {
  execute,
};
