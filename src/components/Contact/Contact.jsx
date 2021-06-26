import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import Title from '../Title/Title';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(() => setShow(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { name, email, message } = state;

  return (
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
              onsubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <Form.Group controlId="formGroupName" className="mb-4">
                <Form.Label className="h3">お名前</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail" className="mb-4">
                <Form.Label className="h3">メールアドレス</Form.Label>
                <Form.Control
                  required
                  size="lg"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupMessage" className="mb-4">
                <Form.Label className="h3">お問い合わせ内容</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={5}
                  name="message"
                  value={message}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size="lg">
                  送信
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header>送信完了</Toast.Header>
              <Toast.Body>お問い合わせありがとうございます。</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
