import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";

import { ItemsModel } from "../../../models/ItemsModel";
import { BuyButton, ItemName, ItemPropsContainer, MenuItemsContent, MenuItemsForm } from "./styles";

interface MenuItemProps extends ItemsModel {
  onClick: () => void;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

export const MenuItem = ({
  imageUrl,
  props,
  name,
  description,
  price,
  quantity,
  onClick,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: MenuItemProps) => {
  const { "gray-100": iconColor } = useTheme();

  return (
    <MenuItemsContent>
      <img src={imageUrl} />
      <ItemPropsContainer>
        {props.map((prop, index) => (
          <h5 key={index}>{prop}</h5>
        ))}
      </ItemPropsContainer>
      <ItemName>{name}</ItemName>
      <p>{description}</p>
      <div>
        <h2>
          <span>R$</span> {price}
        </h2>
        <MenuItemsForm>
          <button onClick={() => onDecreaseQuantity()} type="button">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => onIncreaseQuantity()} type="button">
            +
          </button>
        </MenuItemsForm>
        <BuyButton onClick={() => onClick()}>
          <ShoppingCart size={22} weight="fill" color={iconColor} />
        </BuyButton>
      </div>
    </MenuItemsContent>
  );
};
