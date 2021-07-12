import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ size, color }, props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path fill="none" d="M0 0H48V48H0z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="M16.5 37.23l17-12.71a.63.63 0 000-1l-17-12.71"
    />
  </svg>
);
Arrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Arrow;
