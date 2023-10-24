import styled from "styled-components";

export const OrderDetailsValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  font-family: "Roboto";

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 4px;

    margin-top: 1.5rem;
    padding: 0.75rem 0.5rem;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.4rem;
    text-transform: uppercase;

    border: 1px solid transparent;
    border-radius: 6px;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ValuesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1375rem;

    color: ${({ theme }) => theme["tertiary"]};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 26px;

    color: ${({ theme }) => theme["tertiary-dark"]};
  }
`;
