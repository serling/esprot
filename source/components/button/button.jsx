import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon';
import VisuallyHidden from '../visually-hidden';

const iconSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small'
};

const themes = {
  default: 'default'
};

const types = {
  button: 'button',
  link: 'link',
  submit: 'submit'
};

const elements = {
  [types.button]: 'button',
  [types.link]: 'a',
  [types.submit]: 'button'
};

const Button = ({
  children,
  className,
  onClick,
  disabled,
  iconName,
  iconNameActive,
  iconSize,
  isActive,
  theme,
  type,
  href,
  shouldOpenInNewTab,
  text
}) => {
  const buttonAttributes = href
    ? { href }
    : { disabled, type: types[type] || types.button };

  const element = href ? elements[types.link] : elements[type];

  const targetAttributes =
    href && shouldOpenInNewTab
      ? {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      : {};

  const content = children || text;

  return React.createElement(
    element,
    Object.assign(
      {
        className: cn(
          'button',
          {
            'button--active': isActive,
            [`button--${theme}`]: theme,
            'button--icon': iconName,
            'button--text': !iconName
          },
          className
        ),
        onClick
      },
      buttonAttributes,
      targetAttributes
    ),
    iconName ? (
      <div
        className={cn('button__icon', {
          [`button__icon--${iconSizes[iconSize]}`]: iconSizes[iconSize]
        })}
      >
        <Icon className="button__default-icon" name={iconName} />
        {iconNameActive && (
          <Icon className="button__active-icon" name={iconNameActive} />
        )}
        <VisuallyHidden>{content}</VisuallyHidden>
      </div>
    ) : (
      content
    )
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconName: PropTypes.string,
  iconNameActive: PropTypes.string,
  iconSize: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  shouldOpenInNewTab: PropTypes.bool,
  text: PropTypes.string
};

Button.defaultProps = {
  type: types.button
};

Button.iconSizes = iconSizes;
Button.themes = themes;

export default Button;
