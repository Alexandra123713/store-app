import styled from 'styled-components';
import { useState } from 'react';
import './App.css';
import { items } from './utils/items';
import { CardList } from './components/CardList';
import { Wishlist } from './components/Wishlist';

function App() {
  const [buttonState, setButtonState] = useState({});
  const [wishList, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((prevItems) => [...prevItems, item]);

    setButtonState((prevState) => ({
      ...prevState,
      [item.id]: { text: 'Added to wishlist', disabled: true },
    }));
  };

  const deleteToWishlist = (itemToRemove) => {
    setWishlist((prevItems) =>
      prevItems.filter((currentItem) => currentItem.id !== itemToRemove.id)
    );
    setButtonState((prevState) => ({
      ...prevState,
      [itemToRemove.id]: { text: 'Ad to wishlist', disabled: false },
    }));
  };

  return (
    <StoreBody>
      <CardList
        buttonState={buttonState}
        setButtonState={setButtonState}
        items={items}
        addToWishlist={addToWishlist}
      />
      <Wishlist
        wishList={wishList}
        deleteToWishlist={deleteToWishlist}
      />
    </StoreBody>
  );
}
const StoreBody = styled.div`
  width: 80%;
  margin: 0 auto;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;
export default App;
