import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt, category }) => (
  <StaticQuery
    query={graphql`
      {
        media: allFile(
          filter: { sourceInstanceName: { eq: "media" }, relativeDirectory: { ne: "iconsSvg" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.7)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.media.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.gatsbyImageData;
      return (
        <div className="projectImgBox">
          <GatsbyImage image={imageFluid} alt={alt} />
          <p>{category}</p>
        </div>
      );
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  category: PropTypes.string,
};

export default ProjectImg;
