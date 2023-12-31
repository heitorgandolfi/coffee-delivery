import { useStore } from "effector-react";
import CompanyLogo from "../../assets/icons/company-logo.svg";

import {
  HeaderContainer,
  HeaderContent,
  LocalizationIcon,
  LocalizationWrapper,
  ShoppingCartIcon,
  ShoppingCartIconWrapper,
} from "./styles";
import { AddToCartStore } from "../../stores/addToCartStore/addToCartStore";

export const Header = () => {
  const { orderItems } = useStore(AddToCartStore);
  const itemsQuantity = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={CompanyLogo} alt="" />

        <div>
          <LocalizationWrapper>
            <LocalizationIcon weight="fill" />
            <h5>Ribeirão Preto, SP</h5>
          </LocalizationWrapper>

          <ShoppingCartIconWrapper to="/order">
            <ShoppingCartIcon weight="fill" />
            <div>{itemsQuantity}</div>
          </ShoppingCartIconWrapper>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
