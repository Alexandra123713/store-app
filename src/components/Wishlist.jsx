import styled from 'styled-components';
import { WishItem } from './WishItem';

export const Wishlist = ({ wishList, deleteFromWishlist }) => {
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
            deleteFromWishlist={deleteFromWishlist}
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
