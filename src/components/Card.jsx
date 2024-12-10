import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const Card = ({ item, addToWishlist, buttonState, setButtonState }) => {
  const handleAddToWishlist = () => {
    addToWishlist(item);
  };
  return (
    <div>
      <CardImage src={item.imgSource} />
      <CardTitle>{item.title}</CardTitle>
      <CardFooter>
        <span>{item.price} lei</span>
        <Button
          onClick={handleAddToWishlist}
          buttonTitle={
            buttonState[item.id] && buttonState[item.id].text
              ? buttonState[item.id].text
              : 'Add to wishlist'
          }
          disabled={
            buttonState[item.id] && buttonState[item.id].disabled
              ? buttonState[item.id].disabled
              : false
          }
        />
      </CardFooter>
    </div>
  );
};

const CardImage = styled.img`
  width: 80%;
  height: 30rem;
`;

const CardTitle = styled.h4`
  max-width: 80%;
  margin: 1rem auto;
`;

const CardFooter = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
