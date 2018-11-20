import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default'
};

const Link = ({
  children,
  className,
  href,
  shouldOpenInNewTab,
  text,
  theme
}) => {
  const targetAttributes = shouldOpenInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {};

  return React.createElement(
    'a',
    {
      className: cn(
        'link',
        {
          [`link--${themes[theme]}`]: themes[theme]
        },
        className
      ),
      href,
      ...targetAttributes
    },
    children || text || href
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.string.isRequired,
  shouldOpenInNewTab: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.themes = themes;

export default Link;
