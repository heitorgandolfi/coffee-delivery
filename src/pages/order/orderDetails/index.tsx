import { useStore } from "effector-react";

import { AddToCartStore } from "../../../stores/addToCartStore/addToCartStore";

import { OrderItems } from ".././orderItems";
import { OrderDetailsValues } from ".././orderValue";

import { OrderDetailsContainer } from "./styles";

export const OrderDetails = () => {
  const { orderItems } = useStore(AddToCartStore);

  const totalItemsValue = orderItems.reduce((acc, item) => {
    acc += item.quantity * item.price;
    return acc;
  }, 0);

  const randomDeliveryPrice = (Math.random() * 9 + 1);
  const orderTotal = (totalItemsValue + randomDeliveryPrice);

  return (
    <section>
      <article>...</article>
      <OrderDetailsContainer>
        {orderItems.map((item) => {
          return (
            item.quantity > 0 && (
              <OrderItems
                key={item.id}
                productImageUrl={item.imageUrl}
                productName={item.name}
                productPrice={item.price.toFixed(2)}
                productQuantity={item.quantity}
              />
            )
          );
        })}

        <OrderDetailsValues
          itemsValue={totalItemsValue.toFixed(2)}
          deliveryPrice={randomDeliveryPrice.toFixed(2)}
          totalPrice={orderTotal.toFixed(2)}
        />
      </OrderDetailsContainer>
    </section>
  );
};
