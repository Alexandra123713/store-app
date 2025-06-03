import styled from 'styled-components';
import { Button } from './Button';

export const WishItem = ({ item, deleteFromWishlist }) => {
  const handleDeleteFromWishlist = () => {
    deleteFromWishlist(item);
  };
  return (
    <ItemContainer>
      <ItemImg src={item.imgSource} />
      <ItemText>{item.title}</ItemText>
      <span>{item.price}</span>
      <Button
        buttonTitle={'Delete'}
        onClick={handleDeleteFromWishlist}
      />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: black;
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const ItemImg = styled.img`
  width: 6rem;
  height: 6rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;

const ItemText = styled.h4`
  width: 30%;
`;
