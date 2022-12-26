import { Author } from './Author';
import { Quote } from './Quote';
import * as SC from './Text.styled';

export const Text = ({ children }) => {
  return <SC.StyledText id="text">{children}</SC.StyledText>;
};
