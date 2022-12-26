import { Wraper } from './Wraper/Wraper';
import * as SC from './App.styled';
import { Text } from './Text/Text';
import { ButtonNext } from './Clickable/ButtonNext';
import { Quote } from './Text/Quote';
import { Author } from './Text/Author';
import { Container } from './Container/Container';
import { FetchQuotes } from 'Api/FetchQuotes';
import { useEffect, useState } from 'react';
import { getRandomHexColor } from 'Var/Color';
import { TwitterShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';

export let color;

export const App = () => {
  const [quotesArray, setQuotesArray] = useState([]);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    FetchQuotes().then(response => setQuotesArray(response.data));
  }, []);

  useEffect(() => {
    const index = Math.floor(Math.random() * 100);
    const quote = quotesArray[index];
    if (quote) {
      setText(quote.text);
      setAuthor(quote.author);
    }
    return;
  }, [quotesArray]);

  const handleClick = event => {
    const index = Math.floor(Math.random() * 100);
    const quote = quotesArray[index];
    setText(quote.text);
    setAuthor(quote.author);
    color = getRandomHexColor();
  };

  return (
    <SC.StyledApp
      style={{
        background: `${color}`,
      }}
    >
      <Wraper>
        <Text>
          <Quote text={text} />
          <Author author={author} />
        </Text>
        <Container>
          <TwitterShareButton url={text}>
            <TwitterIcon />
          </TwitterShareButton>
          <ButtonNext onClick={handleClick} />
        </Container>
      </Wraper>
    </SC.StyledApp>
  );
};
