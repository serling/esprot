import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Icon = ({ className, name }) =>
  !name ? null : <div className={cn('icon', `icon--${name}`, className)} />;

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired
};

export default Icon;
