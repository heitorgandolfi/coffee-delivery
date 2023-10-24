import {
  ButtonsWrapper,
  OrderDetailsContent,
  OrderDetailsWrapper,
  RemoveItemButton,
} from "./style";

interface OrderDetailsProps {
  productImageUrl: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

export const OrderDetails = ({
  productImageUrl,
  productName,
  productPrice,
  productQuantity,
}: OrderDetailsProps) => {
  return (
    <OrderDetailsContent>
      <img src={productImageUrl} width={64} alt="" />
      <div>
        <h3>{productName}</h3>
        <OrderDetailsWrapper>
          <ButtonsWrapper>
            <button onClick={() => {}} type="button">
              -
            </button>
            <input
              type="number"
              id="number"
              value={productQuantity}
              onChange={(e) => e.target.value}
            />
            <button onClick={() => {}} type="button">
              +
            </button>
          </ButtonsWrapper>
          <RemoveItemButton type="button">remover</RemoveItemButton>
        </OrderDetailsWrapper>
      </div>
      <h4>R$ {productPrice}</h4>
    </OrderDetailsContent>
  );
};
