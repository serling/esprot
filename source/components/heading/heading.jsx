import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const themes = {
  default: 'default'
};

const Heading = ({ children, text, className, level, theme }) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn(
        'heading',
        {
          [`heading--${themes[theme]}`]: themes[theme]
        },
        className
      )
    },
    text || children
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string,
  text: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Heading.defaultProps = {
  level: 2
};

Heading.themes = themes;

export default Heading;
