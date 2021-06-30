import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

const Contact = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="contact">
      <Container>
        <Title title="お問い合わせ" englishtile="Contact" />
        <Row className="justify-content-center">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <Col md="7" className="mx-auto">
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
                  <Form.Label className="h4">お名前</Form.Label>
                  <Form.Control required size="lg" type="text" name="name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail" className="mb-4">
                  <Form.Label className="h4">メールアドレス</Form.Label>
                  <Form.Control required size="lg" type="email" name="email" />
                </Form.Group>
                <Form.Group controlId="formGroupMessage" className="mb-4">
                  <Form.Label className="h4">お問い合わせ内容</Form.Label>
                  <Form.Control required size="lg" as="textarea" rows={5} name="message" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    送信
                  </Button>
                </div>
              </Form>
            </Col>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
