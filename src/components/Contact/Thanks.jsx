import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Title from '../Title/Title';

const Thanks = () => (
  <section id="contact">
    <Container>
      <Title title="Contact" />
      <Row className="justify-content-center">
        <Col md="7">
          <h1>お問い合わせ承りました。</h1>
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
