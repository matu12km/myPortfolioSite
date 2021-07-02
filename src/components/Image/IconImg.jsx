import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const IconImg = ({ className, iconname, alt, width, height }) => (
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
      const image = data.iconsSvg.edges.find((n) => n.node.relativePath.includes(iconname));

      if (!image) return null;

      const imageFluid = image.node.publicURL;
      return (
        <GatsbyImage
          id={alt}
          className={className}
          image={imageFluid}
          width={width}
          height={height}
          alt={alt}
        />
      );
    }}
  />
);

IconImg.propTypes = {
  iconname: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default IconImg;
