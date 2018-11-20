import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  portrait: 'portrait'
};

const Image = ({ src, alt, theme, className }) => (
  <img
    className={cn(
      'image',
      { [`image--${themes[theme]}`]: themes[theme] },
      className
    )}
    src={src}
    alt={alt}
  />
);

Image.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])).isRequired
};

Image.themes = themes;

export default Image;
