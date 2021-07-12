import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import IconSvg from '../Image/IconSvg';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <IconSvg name="arrow" size={20} color="#fff" transform="rotate(180)" />
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
                  <IconSvg name={name} size={20} color="#fff" />
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
