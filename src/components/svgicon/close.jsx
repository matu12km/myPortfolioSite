import React from 'react';
import PropTypes from 'prop-types';

function CloseIcon({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      color={color}
    >
      <defs>
        <style>
          {
            '.prefix__cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px}'
          }
        </style>
      </defs>
      <path fill="none" d="M0 0h48v48H0z" />
      <g id="prefix__icon">
        <path className="prefix__cls-2" d="M12.13 12.63l24 23.5M12.38 36.38l23.5-24" />
      </g>
    </svg>
  );
}
CloseIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default CloseIcon;
