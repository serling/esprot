import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const XhtmlContent = ({ string, className }) => (
  <div className={cn('xhtml-content', className)}>
    <div dangerouslySetInnerHTML={{ __html: string }} />
  </div>
);

XhtmlContent.propTypes = {
  string: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default XhtmlContent;
