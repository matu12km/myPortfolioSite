import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import IconImg from '../Image/IconImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="スキル" englishtile="Skills" />
        <Fade bottom duration={1000}>
          <Row className="skills-wrapper">
            {skills.map((skill) => {
              const { name, level, id, icon } = skill;
              return (
                <Col className="mb-5" key={id} lg={2} sm={4} xs={4}>
                  <div className="skills-wrapper">
                    <IconImg alt={name} iconname={icon} width={30} height={30} />
                    <h4 className="skills-name">{name || ''}</h4>
                    <ReactStarsRating
                      className="skillRating"
                      value={level}
                      size={15}
                      isEdit={false}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
