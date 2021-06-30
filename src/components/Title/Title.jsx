import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, englishtile }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{title}</h2>
    <span className="section-sub-title">{englishtile}</span>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  englishtile: PropTypes.string,
};

export default Title;
