import styled from 'styled-components';

export const Button = ({ buttonTitle, onClick, disabled }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}>
      {buttonTitle}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 10rem;
  height: 2.8rem;
  font-size: medium;
  font-weight: bold;
  background-color: #ffdc52;
  border-radius: 10px;
  cursor: pointer;
`;
