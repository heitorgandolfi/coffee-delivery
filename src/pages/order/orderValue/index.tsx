import { OrderDetailsValuesContainer, ValuesWrapper } from "./styles";

interface OrderDetailsValuesProps {
  itemsValue: string;
  deliveryPrice: string;
  totalPrice: string;
}

export const OrderDetailsValues = ({ itemsValue, deliveryPrice, totalPrice }: OrderDetailsValuesProps) => {
  return (
    <OrderDetailsValuesContainer>
      <ValuesWrapper>
        <h4>Total de itens</h4>
        <h4>R$ {itemsValue}</h4>
      </ValuesWrapper>
      <ValuesWrapper>
        <h4>Entrega</h4>
        <h4>R$ {deliveryPrice}</h4>
      </ValuesWrapper>
      <ValuesWrapper>
        <h3>Total</h3>
        <h3>R$ {totalPrice}</h3>
      </ValuesWrapper>
      <button>Confirmar pedido</button>
    </OrderDetailsValuesContainer>
  );
};
