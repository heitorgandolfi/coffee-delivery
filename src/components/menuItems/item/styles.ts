import styled from "styled-components";

export const MenuItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  max-width: 256px;
  width: 100%;
  height: 310px;

  margin-top: 3.375rem;
  padding: 0.5rem;

  border-radius: 6px 36px;

  background-color: ${({ theme }) => theme["gray-200"]};

  h5 {
    font-size: 0.625rem;
    font-family: "Roboto";
    font-weight: 700;

    padding: 4px 8px;
    text-transform: uppercase;
    line-height: 0.8125rem;

    border-radius: 100px;

    color: ${({ theme }) => theme["primary-dark"]};
    background-color: ${({ theme }) => theme["primary-light"]};
  }

  p {
    max-width: 216px;
    width: 100%;

    text-align: center;

    font-family: "Roboto";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    line-height: 1.1375rem;

    margin-bottom: 0.75rem;

    color: ${({ theme }) => theme["tertiary-light"]};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    h2 {
      font-size: 1.5rem;
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;

      line-height: 1.1375rem;

      color: ${({ theme }) => theme["tertiary"]};

      span {
        text-align: right;

        font-family: "Roboto";
        font-size: 0.875rem;
        font-weight: 400;

        line-height: 18.2px;

        color: ${({ theme }) => theme["tertiary"]};
      }
    }
  }
`;

export const ItemPropsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemName = styled.h2`
  max-width: 216px;
  width: 100%;

  text-align: center;

  font-size: 1.25rem;
  font-family: "Baloo 2";
  font-weight: 700;

  line-height: 26px;

  color: ${({ theme }) => theme["tertiary-dark"]};
`;

export const MenuItemsForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 38px;
  padding: 0.5rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme["gray-300"]};

  span {
    max-width: 20px;
    width: 100%;

    text-align: center;
    font-family: "Roboto";

    border: 1px solid transparent;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    font-size: 1.25rem;

    border: 1px solid transparent;

    color: ${({ theme }) => theme["secondary"]};
    background-color: transparent;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const BuyButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;

  border: 1px solid transparent;
  border-radius: 6px;

  background-color: ${({ theme }) => theme["secondary"]};

  &:hover {
    opacity: 0.9;
  }
`;
