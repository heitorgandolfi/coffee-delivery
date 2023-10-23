import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const HighlightContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 3.5rem;

  margin-top: 5.875rem;
`;

export const PageTitle = styled.h1`
  font-family: "Baloo 2";
  font-size: 3rem;
  font-weight: 800;
  line-height: 3.9rem;

  margin-bottom: 1rem;

  color: ${(props) => props.theme["tertiary-darker"]};
`;

export const SubPageTitle = styled.h2`
  font-family: "Roboto";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;

  color: ${(props) => props.theme["tertiary-dark"]};
`;

export const HighlightInfosWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2.5rem;

  margin-top: 4.125rem;
`;

export const HighlightInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9375rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      padding: 0.5rem;
      background-color: red;
    }

    h3 {
      font-family: "Roboto";
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3rem;

      color: ${(props) => props.theme.tertiary};
    }
  }
`;

interface IconContainerProps {
  bgcolor: keyof typeof defaultTheme;
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme[props.bgcolor]};
`;
