import styled from 'styled-components';
import { WishItem } from './WishItem';

export const Wishlist = ({ wishList, deleteToWishlist }) => {
  return (
    <WishlistContainer>
      <h3>Wishlist</h3>
      {wishList.length === 0 ? (
        <p>Wishlist is empty</p>
      ) : (
        wishList.map((item) => (
          <WishItem
            key={item.id}
            item={item}
            deleteToWishlist={deleteToWishlist}
          />
        ))
      )}
    </WishlistContainer>
  );
};

const WishlistContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
`;
