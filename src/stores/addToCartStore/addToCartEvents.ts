import { createEvent } from "effector";
import { ItemsModel } from "../../models/ItemsModel";

export const loadAddToCart = createEvent("loadAddToCart");
export const loadAddToCartDone = createEvent<ItemsModel>("loadAddToCartDone");
export const loadAddToCartFail = createEvent("loadAddToCartFail");
