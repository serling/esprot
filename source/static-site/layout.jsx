import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default'
};

const Layout = ({ children, theme }) => {
  return (
    <div
      className={cn('layout', { [`layout--${themes[theme]}`]: themes[theme] })}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Layout.defaultProps = {
  children: null
};

Layout.themes = themes;

export default Layout;
