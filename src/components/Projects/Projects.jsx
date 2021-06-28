import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [modalShow, setModalShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);
  const [textInfo, setTextInfo] = useState(null);
  const [urlSite, setUrlSite] = useState(null);
  const [loadIndex, setLoadIndex] = useState(3);

  const handleClose = () => setModalShow(false);

  const handleShow = (e, src, title, info, url) => {
    e.preventDefault();
    setUrlImage(src);
    setImageTitle(title);
    setModalShow(true);
    setTextInfo(info);
    setUrlSite(url);
  };

  const displayMore = () => {
    if (loadIndex < projects.length) {
      setLoadIndex(loadIndex + 3);
    }
  };

  const displayClose = () => {
    if (loadIndex > 3) {
      setLoadIndex(loadIndex - 3);
    }
  };

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
    <section id="projects">
      <Container>
        <Title title="projects" />
        <Row className="projects-wrapper">
          {projects.slice(0, loadIndex).map((project) => (
            <Col key={project.id} lg={4} sm={6} className="mb-4">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <a
                  className="projectBox"
                  href={project.src}
                  onClick={(e) =>
                    handleShow(e, project.img, project.title, project.info, project.url)
                  }
                >
                  <ProjectImg alt={project.title} filename={project.img} />
                </a>
              </Fade>
            </Col>
          ))}
          <Modal show={modalShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{imgTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ProjectImg alt={imgTitle} filename={urlImage} />
              <p>{textInfo}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" href={urlSite}>
                サイトを見る
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        {projects.length > 3 && loadIndex !== projects.length ? (
          <Button onClick={displayMore} variant="secondary">
            さらに表示
          </Button>
        ) : (
          ''
        )}
        {loadIndex > 3 ? (
          <Button onClick={displayClose} variant="secondary">
            表示を減らす
          </Button>
        ) : (
          ''
        )}
      </Container>
    </section>
  );
};

export default Projects;
