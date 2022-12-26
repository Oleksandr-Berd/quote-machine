import * as SC from './ButtonNext.styled';
import { color } from 'components/App';

export const ButtonNext = ({ onClick }) => {
  return (
    <SC.ButtonNextStyled onClick={onClick} style={{ background: `${color}` }}>
      New Quote
    </SC.ButtonNextStyled>
  );
};
