import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { name, age, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } = about;

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
    <section id="about">
      <Container>
        <Title title="自己紹介" englishtile="about me" />
        <Row className="about-wrapper">
          {/*
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
        </Col> */}
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  <span>名前：</span>
                  {name || '名前'}
                  {age || '西暦'}
                </p>
                <p className="about-wrapper__info-text">{paragraphOne || '1行目'}</p>
                <p className="about-wrapper__info-text">{paragraphTwo || '2行目'}</p>
                <p className="about-wrapper__info-text">{paragraphThree || '3行目'}</p>
                <p className="about-wrapper__info-text">{paragraphFour || '4行目'}</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
