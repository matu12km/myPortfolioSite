import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = 'Hello. Welcome to my portfolio site.';

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 90);
    }
  }, [index]);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <h1>
          {text}
          <span aria-hidden="true" />
        </h1>
      </Container>
    </section>
  );
};

export default Header;
