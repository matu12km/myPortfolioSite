import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.3)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage image={imageFluid} alt={alt} />;
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
