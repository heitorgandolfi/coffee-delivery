import { mockData } from "../../data/mock/products";

import { MenuItemsContainer, SectionTitle, MenuItemsWrapper } from "./styles";
import { MenuItem } from "./item";
import { AddToCartUseCase } from "../../useCases/addToCartUseCase";
import { useState } from "react";

export const MenuItems = () => {
  const [productQuantity, setProductQuantity] = useState(0);

  const handleClick = (productId: string) => {
    AddToCartUseCase.execute(productId);
  };

  const handleIncreaseQuantity = (productId: string) => {
    const product = mockData.find((item) => item.id === productId);
    if (product) setProductQuantity((product.quantity += 1));
  };

  const handleDecreaseQuantity = (productId: string) => {
    const product = mockData.find((item) => item.id === productId);
    if (product && product.quantity === 0) return;
    if (product) setProductQuantity((product.quantity -= 1));
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
            onIncreaseQuantity={() => handleIncreaseQuantity(item.id)}
            onDecreaseQuantity={() => handleDecreaseQuantity(item.id)}
          />
        ))}
      </MenuItemsWrapper>
    </MenuItemsContainer>
  );
};
