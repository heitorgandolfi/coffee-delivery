import styled from "styled-components";

export const OrderDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  max-width: 448px;
  width: 100%;
  height: auto;

  padding: 40px;

  border-radius: 6px 44px;
  background-color: ${({ theme }) => theme["gray-150"]};
`;
