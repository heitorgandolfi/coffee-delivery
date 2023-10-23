import HighlightImage from "../../assets/imgs/hero-image.png";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import {
  HighlightContainer,
  PageTitle,
  SubPageTitle,
  HighlightInfos,
  HighlightInfosWrapper,
  IconContainer,
} from "./styles";
import { useTheme } from "styled-components";

export const HighlightArea = () => {
  const { "gray-150": iconColor } = useTheme();

  return (
    <HighlightContainer>
      <article>
        <PageTitle>
          Encontre o café perfeito
          <br /> para qualquer hora do dia
        </PageTitle>
        <SubPageTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </SubPageTitle>

        <HighlightInfosWrapper>
          <HighlightInfos>
            <div>
              <IconContainer bgcolor="primary-dark">
                <ShoppingCart size={16} weight="fill" color={iconColor} />
              </IconContainer>
              <h3>Compra simples e segura</h3>
            </div>
            <div>
              <IconContainer bgcolor="primary">
                <Timer size={16} weight="fill" color={iconColor} />
              </IconContainer>
              <h3>Entrega rápida e rastreada</h3>
            </div>
          </HighlightInfos>

          <HighlightInfos>
            <div>
              <IconContainer bgcolor="tertiary">
                <Package size={16} weight="fill" color={iconColor} />
              </IconContainer>
              <h3>Embalagem mantém o café intacto</h3>
            </div>
            <div>
              <IconContainer bgcolor="secondary">
                <Coffee size={16} weight="fill" color={iconColor} />
              </IconContainer>
              <h3>O café chega fresquinho até você</h3>
            </div>
          </HighlightInfos>
        </HighlightInfosWrapper>
      </article>

      <img src={HighlightImage} alt="" />
    </HighlightContainer>
  );
};
