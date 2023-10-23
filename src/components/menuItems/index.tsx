import { mockData } from "../../data/mock/products";
import { MenuItem } from "./item";
import { MenuItemsContainer, SectionTitle, MenuItemsWrapper } from "./styles";

export const MenuItems = () => {
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
          />
        ))}
      </MenuItemsWrapper>
    </MenuItemsContainer>
  );
};
