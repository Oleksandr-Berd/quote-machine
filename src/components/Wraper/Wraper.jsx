import * as SC from './Wrapper.styled';
import { color } from 'components/App';

export const Wraper = ({ children }) => {
  return (
    <SC.StyledWrapper id="quoteBox" style={{ color: `${color}` }}>
      {children}
    </SC.StyledWrapper>
  );
};
