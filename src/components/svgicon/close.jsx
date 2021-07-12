import React from 'react';
import PropTypes from 'prop-types';

function CloseIcon({ size, color }, props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      color={color}
      {...props}
    >
      <defs>
        <style>
          {
            '.prefix__cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px}'
          }
        </style>
      </defs>
      <title>cross_24</title>
      <g id="prefix__\u30EC\u30A4\u30E4\u30FC_2" data-name="\u30EC\u30A4\u30E4\u30FC 2">
        <path
          fill="none"
          d="M0 0h48v48H0z"
          id="prefix__Rect_\u6700\u5F8C\u900F\u660E\u306B_"
          data-name="Rect\uFF08\u6700\u5F8C\u900F\u660E\u306B\uFF09"
        />
        <g id="prefix__icon">
          <path className="prefix__cls-2" d="M12.13 12.63l24 23.5M12.38 36.38l23.5-24" />
        </g>
      </g>
    </svg>
  );
}
CloseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default CloseIcon;
