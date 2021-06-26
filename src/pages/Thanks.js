import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Title from '../components/Title/Title';

const Thanks = () => (
  <section id="ThanksPage">
    <Container>
      <Title title="お問い合わせ承りました。" />
      <Row className="justify-content-center">
        <Col md="7">
          <p>
            この度はお問い合わせいただきありがとうございます。
            <br />
            お問い合わせ内容を確認の上お返事いたします。
          </p>
          <Button href="/" variant="success">
            TOP
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Thanks;
