import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

library.add(faTwitter, faInstagram, faChevronCircleUp, faTimes);

const FontIcon = ({ iconstyle, iconname, className }) => (
  <FontAwesomeIcon icon={[iconstyle, iconname]} className={className} />
);

FontIcon.propTypes = {
  iconstyle: PropTypes.string,
  iconname: PropTypes.string,
  className: PropTypes.string,
};

export default FontIcon;
