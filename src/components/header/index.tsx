import CompanyLogo from "../../assets/icons/company-logo.svg";

import {
  HeaderContainer,
  HeaderContent,
  LocalizationIcon,
  LocalizationWrapper,
  ShoppingCartIcon,
  ShoppingCartIconWrapper,
} from "./styles";

export const Header = () => {
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
          </ShoppingCartIconWrapper>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};
