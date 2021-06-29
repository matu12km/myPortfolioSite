import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={(data) => {
      const links = data.site.siteMetadata.menuLinks;
      const { title } = data.site.siteMetadata;
      return (
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {links.map((menulink) => (
                  <Nav.Link href={menulink.link}>{menulink.name}</Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }}
  />
);

export default Navigation;
