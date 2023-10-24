import styled from "styled-components";

export const OrderDetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  max-width: 368px;
  width: 100%;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};

  h3 {
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 1.3rem;

    color: ${({ theme }) => theme["tertiary-dark"]};
  }

  h4 {
    align-self: flex-start;
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 700;
    line-height: 1.3rem;

    color: ${({ theme }) => theme["tertiary"]};
  }
`;

export const OrderDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.25rem;

  margin-top: 0.5rem;
`;


export const ButtonsWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 32px;
  padding: 0.5rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme["gray-300"]};

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* -moz-appearance: textfield; */

  input[type="number"] {
    max-width: 20px;
    width: 100%;
    text-align: center;

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

export const RemoveItemButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  padding: 0px 0.5rem;

  font-family: "Roboto";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 19.2px;
  text-transform: uppercase;

  border: 1px solid transparent;
  border-radius: 6px;

  color: ${({ theme }) => theme["tertiary"]};
  background-color: ${({ theme }) => theme["gray-300"]};

  &:hover {
    opacity: 0.9;
  }
`;