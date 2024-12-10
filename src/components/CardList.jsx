import styled from 'styled-components';
// import { items } from '../utils/items';
import { Card } from './Card';

export const CardList = ({
  items,
  addToWishlist,
  buttonState,
  setButtonState,
}) => {
  return (
    <CardContainer>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          addToWishlist={addToWishlist}
          buttonState={buttonState}
          setButtonState={setButtonState}
        />
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem 0;
`;
