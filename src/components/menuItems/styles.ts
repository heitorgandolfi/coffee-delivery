import styled from "styled-components";

export const MenuItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  flex-wrap: wrap;

  max-width: 1180px;
  width: 100%;

  padding: 0 0 160px 0;
  margin: 0 auto;
  margin-top: 9.125rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-family: "Baloo 2";
  font-weight: 800;
  line-height: 41.6px;

  color: ${({ theme }) => theme["tertiary-dark"]};
`;

export const MenuItemsWrapper = styled.article`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;
`;
