import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import IconFont from '../Image/FontAwesomeIcon';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <IconFont iconstyle="fas" iconname="chevron-circle-up" className="upArrow" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || ''}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <IconFont iconstyle="fab" iconname={name} className="footerSocialIcon" />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">© {new Date().getFullYear()} - created by Matsuzawa Kazuki</p>
      </Container>
    </footer>
  );
};

export default Footer;
