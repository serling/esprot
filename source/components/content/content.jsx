import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default'
};

const Content = ({ children, className, theme }) =>
  !children ? null : (
    <div
      className={cn(
        'content',
        {
          [`content--${themes[theme]}`]: themes[theme]
        },
        className
      )}
    >
      <div className="content__inner">{children}</div>
    </div>
  );

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Content.defaultProps = {
  theme: themes.default
};

Content.themes = themes;

export default Content;
