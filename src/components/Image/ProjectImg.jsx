import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt, category, title }) => (
  <StaticQuery
    query={graphql`
      {
        media: allFile(filter: { sourceInstanceName: { eq: "media" } }) {
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
      return (
        <div className="projectImgBox">
          <GatsbyImage image={imageFluid} alt={alt} />
          <p>{category}</p>
          <p className="h4">{title}</p>
        </div>
      );
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectImg;
