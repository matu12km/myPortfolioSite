import React from 'react';

import PropTypes from 'prop-types';
import Twitter from '../svgicon/twitter';
import Instagram from '../svgicon/instagram';
import Arrow from '../svgicon/arrow';
import Close from '../svgicon/close';

const FontIcon = ({ name, size, color }, props) => {
  switch (name) {
    case 'twitter':
      return <Twitter size={size} color={color} {...props} />;
    case 'instagram':
      return <Instagram size={size} color={color} {...props} />;
    case 'close':
      return <Close size={size} color={color} {...props} />;
    case 'arrow':
      return <Arrow size={size} color={color} {...props} />;
    default:
      return '';
  }
};

FontIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default FontIcon;
