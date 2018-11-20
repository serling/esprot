import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const types = {
  email: 'email',
  password: 'password',
  tel: 'tel',
  text: 'text',
  url: 'url',
  textarea: 'textarea',
  search: 'search'
};

const themes = {
  default: 'default'
};

class TextInput extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(Object.keys(types).map(key => types[key])).isRequired,
    theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    isInvalid: PropTypes.bool,
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onRef: PropTypes.func,
    isRequired: PropTypes.bool
  };

  static defaultProps = {
    type: types.text,
    theme: themes.default
  };

  state = {
    value: this.props.value,
    onRef: () => {}
  };

  onChange = e => {
    this.setState({
      value: e.target.value || ''
    });
  };

  render() {
    const inputName = this.props.name || this.props.id;

    return (
      <div
        className={cn('text-input', {
          'text-input--invalid': this.props.isInvalid,
          'text-input--required': this.props.isRequired,
          [`text-input--${types[this.props.type]}`]: types[this.props.type]
        })}
      >
        {this.props.label && (
          <label className="text-input__label" htmlFor={inputName}>
            <div className="text-input__heading">{this.props.label}</div>
            {this.props.description && (
              <div className="text-input__description">
                {this.props.description}
              </div>
            )}
          </label>
        )}
        {React.createElement(
          this.props.type === types.textarea ? 'textarea' : 'input',
          {
            className: cn('text-input__input', {
              'text-input__input--invalid': this.props.isInvalid,
              [`text-input__input--${themes[this.props.theme]}`]: themes[
                this.props.theme
              ]
            }),
            id: this.props.id,
            name: inputName,
            onChange: this.props.onChange || this.onChange,
            ref: ref => {
              if (this.props.onRef) {
                this.props.onRef(ref);
              }
            },
            value: this.props.onChange ? this.props.value : this.state.value,
            placeholder: this.props.placeholder,
            type:
              this.props.type !== types.textarea ? this.props.type : undefined,
            required: this.props.isRequired
          }
        )}
      </div>
    );
  }
}

TextInput.themes = themes;

export default TextInput;
