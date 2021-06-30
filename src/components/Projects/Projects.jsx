import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import FontIcon from '../Image/FontAwesomeIcon';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [modalShow, setModalShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);
  const [textInfo, setTextInfo] = useState(null);
  const [textLang, setLanguage] = useState(null);
  const [textFrame, setFramework] = useState(null);
  const [textOther, setOther] = useState(null);
  const [urlSite, setUrlSite] = useState(null);
  const [loadIndex, setLoadIndex] = useState(3);

  const handleClose = () => setModalShow(false);

  const handleShow = (e, src, title, info, lang, framework, other, url) => {
    e.preventDefault();
    setUrlImage(src);
    setImageTitle(title);
    setModalShow(true);
    setTextInfo(info);
    setUrlSite(url);
    setLanguage(lang);
    setFramework(framework);
    setOther(other);
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
        <Title title="制作物" englishtile="Projects" />
        <Row className="projects-wrapper">
          {projects.slice(0, loadIndex).map((project) => (
            <Col key={project.id} lg={4} sm={6} className="projectImg mb-4">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <a
                  className="projectBox"
                  href={project.src}
                  onClick={(e) =>
                    handleShow(
                      e,
                      project.img,
                      project.title,
                      project.info,
                      project.language,
                      project.framework,
                      project.other,
                      project.url
                    )
                  }
                >
                  <ProjectImg
                    className="thumbnail"
                    alt={project.title}
                    filename={project.img}
                    category={project.category}
                    title={project.title}
                  />
                </a>
              </Fade>
            </Col>
          ))}
          <Modal show={modalShow} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>{imgTitle}</Modal.Title>
              <Button variant="light" onClick={handleClose}>
                <FontIcon iconstyle="fas" iconname="times" className="close-btn" />
              </Button>
            </Modal.Header>
            <Modal.Body>
              <ProjectImg alt={imgTitle} filename={urlImage} />
              <p className="text-start">{textInfo}</p>
              <p className="text-start">開発言語：{textLang}</p>
              <p className="text-start">フレームワーク：{textFrame}</p>
              <p className="text-start">その他ツール等：{textOther}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" href={urlSite} className="shadow-lg">
                サイトを見る
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        {projects.length > 3 && loadIndex !== projects.length ? (
          <Button
            className="cta-btn--resume m-3 shadow-lg"
            size="lg"
            onClick={displayMore}
            variant="secondary"
          >
            さらに表示
          </Button>
        ) : (
          ''
        )}
        {loadIndex > 3 ? (
          <Button
            className="cta-btn m-3 shadow-lg"
            size="lg"
            onClick={displayClose}
            variant="secondary"
          >
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
