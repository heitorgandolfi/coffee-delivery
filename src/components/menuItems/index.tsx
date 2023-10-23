import { mockData } from "../../data/mock/products";

import { MenuItemsContainer, SectionTitle, MenuItemsWrapper } from "./styles";
import { MenuItem } from "./item";
import { AddToCartUseCase } from "../../useCases/addToCartUseCase";

export const MenuItems = () => {
  // const totalCartValue = listOfProducts.reduce((acc, item) => {
  //   return acc + item.price;
  // }, 0); // Adicionar o valor total tb na Store.

  const handleClick = (productId: string) => {
    AddToCartUseCase.execute(productId);
  };

  return (
    <MenuItemsContainer>
      <SectionTitle>Nossos cafés</SectionTitle>

      <MenuItemsWrapper>
        {mockData.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            props={item.props}
            name={item.name}
            description={item.description}
            price={parseFloat(item.price.toFixed(2))}
            quantity={item.quantity}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </MenuItemsWrapper>
    </MenuItemsContainer>
  );
};
