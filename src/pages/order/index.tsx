import { useStore } from "effector-react";

import { AddToCartStore } from "../../stores/addToCartStore/addToCartStore";

import { OrderDetails } from "./orderDetails";
import { OrderDetailsValues } from "./orderValue";
import { OrderDetailsContainer } from "./styles";

export const Order = () => {
  const { orderItems } = useStore(AddToCartStore);

  const totalItemsValue = orderItems.reduce((acc, item) => {
    acc += item.quantity * item.price;
    return acc;
  }, 0);

  const randomDeliveryPrice = Number((Math.random() * (10 - 1) + 1).toFixed(2));
  const orderTotal = Number((totalItemsValue + randomDeliveryPrice).toFixed(2));

  return (
    <section>
      <article>...</article>
      <OrderDetailsContainer>
        {orderItems.map((item) => {
          return (
            item.quantity > 0 && (
              <OrderDetails
                key={item.id}
                productImageUrl={item.imageUrl}
                productName={item.name}
                productPrice={item.price}
                productQuantity={item.quantity}
              />
            )
          );
        })}

        <OrderDetailsValues
          itemsValue={totalItemsValue}
          deliveryPrice={randomDeliveryPrice}
          totalPrice={orderTotal}
        />
      </OrderDetailsContainer>
    </section>
  );
};
