import styled from "styled-components";
import { MapPin, ShoppingCart } from "phosphor-react";

export const HeaderContainer = styled.header`
  width: 100vw;
  padding: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const LocalizationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.625rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["secondary-light"]};

  h5 {
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.1375rem;

    color: ${(props) => props.theme.secondary};
  }
`;

export const LocalizationIcon = styled(MapPin)`
  width: 1.375rem;
  height: 1.375rem;

  color: ${(props) => props.theme.secondary};
`;

export const ShoppingCartIconWrapper = styled.div`
  cursor: pointer;
  padding: 0.625rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["primary-light"]};

  &:hover {
    opacity: 0.9;
  }
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  width: 1.375rem;
  height: 1.375rem;

  color: ${(props) => props.theme["primary-dark"]};
`;
