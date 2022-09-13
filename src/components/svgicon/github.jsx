import * as React from 'react';
import PropTypes from 'prop-types';

function Github({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.579 31.775"
      width={size}
      height={size}
      fill={color}
    >
      <path fill="#231815" d="M-136.32-107.44h530.973v275.986H-136.32z" />
      <path
        d="M16.288 0a16.291 16.291 0 00-5.147 31.747c.814.149 1.111-.354 1.111-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.32 4.32 0 00-1.809-2.383c-1.479-1.01.112-.99.112-.99a3.42 3.42 0 012.5 1.679 3.469 3.469 0 004.741 1.354 3.482 3.482 0 011.034-2.178C9.7 23.078 5.9 21.68 5.9 15.438a6.3 6.3 0 011.677-4.371 5.863 5.863 0 01.16-4.311s1.368-.438 4.479 1.67a15.451 15.451 0 018.157 0c3.109-2.108 4.475-1.67 4.475-1.67a5.857 5.857 0 01.162 4.311 6.286 6.286 0 011.674 4.371c0 6.258-3.808 7.635-7.437 8.038a3.888 3.888 0 011.106 3.017c0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784A16.292 16.292 0 0016.288 0z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
}
Github.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Github;