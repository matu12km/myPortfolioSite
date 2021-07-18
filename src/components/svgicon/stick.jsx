import * as React from 'react';
import PropTypes from 'prop-types';

function Stick({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-25 -10 50 50"
      width={size}
      height={size}
      color={color}
    >
      <path strokeWidth={3} stroke="#666" d="M0 0v30" />
    </svg>
  );
}
Stick.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Stick;
