import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import TextInput from '../text-input';

class FormTextInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    error: PropTypes.string,
    input: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  };

  static defaultProps = {
    data: {}
  };

  state = {
    text: this.props.data.text || '',
    error: this.props.error
  };

  serialize = () => ({
    id: this.props.id,
    input: this.props.input,
    data: {
      text: this.state.text
    }
  });

  handleOnChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div
        className={cn('form-text-input', {
          'form-text-input--error': this.state.error
        })}
      >
        <TextInput
          id={this.props.id}
          onChange={this.handleOnChange}
          isInvalid={!!this.state.error}
          value={this.state.text}
          {...this.props.input}
        />
        {this.state.error && (
          <div className="form-text-input__error">{this.state.error}</div>
        )}
      </div>
    );
  }
}

export default FormTextInput;
