import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import IconImg from '../Image/IconImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

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
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          {skills.map((skill) => {
            const { name, level, id, icon } = skill;
            return (
              <Col className="mb-5" key={id} lg={2} sm={4} xs={4}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="skills-wrapper">
                    <IconImg alt={name} filename={icon} />
                    <h4 className="skills-name">{name || ''}</h4>
                    <ReactStarsRating
                      className="skillRating"
                      value={level}
                      size={15}
                      isEdit={false}
                    />
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
