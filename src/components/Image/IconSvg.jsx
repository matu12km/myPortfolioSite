import React from 'react';

import PropTypes from 'prop-types';
import Twitter from '../svgicon/twitter';
import Instagram from '../svgicon/instagram';
import Arrow from '../svgicon/arrow';
import Close from '../svgicon/close';

const FontIcon = ({ name, size, color }) => {
  switch (name) {
    case 'twitter':
      return <Twitter size={size} color={color} />;
    case 'instagram':
      return <Instagram size={size} color={color} />;
    case 'close':
      return <Close size={size} color={color} />;
    case 'arrow':
      return <Arrow size={size} color={color} />;
    default:
      return '';
  }
};

FontIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default FontIcon;
