import { ItemsModel } from "../../models/ItemsModel";

export interface AddToCartModel {
  isLoading: boolean;
  orderItems: ItemsModel[];
  hasError: boolean;
  errorMessage: string;
}
