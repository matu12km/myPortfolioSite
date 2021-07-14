import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={size}
    height={size}
    color={color}
  >
    <polyline
      points="5,40 25,10 45,40"
      strokeWidth="5"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
Arrow.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Arrow;
