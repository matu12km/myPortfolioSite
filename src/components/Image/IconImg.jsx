import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const IconImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      {
        iconsSvg: allFile(filter: { sourceInstanceName: { eq: "iconsSvg" } }) {
          edges {
            node {
              publicURL
              relativePath
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.iconsSvg.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.publicURL;
      return <img src={imageFluid} alt={alt} width={30} height={30} />;
    }}
  />
);

IconImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default IconImg;
