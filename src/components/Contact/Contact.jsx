import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => (
  <section id="contact">
    <Container>
      <Title title="Contact" />
      <Row className="justify-content-center">
        <Col md="7">
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/Thanks"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <Form.Group controlId="formGroupName" className="mb-4">
              <Form.Label className="h3">お名前</Form.Label>
              <Form.Control required size="lg" type="text" name="name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail" className="mb-4">
              <Form.Label className="h3">メールアドレス</Form.Label>
              <Form.Control required size="lg" type="email" name="email" />
            </Form.Group>
            <Form.Group controlId="formGroupMessage" className="mb-4">
              <Form.Label className="h3">お問い合わせ内容</Form.Label>
              <Form.Control required as="textarea" rows={5} name="message" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                送信
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
