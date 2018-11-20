import React from 'react';
import PropTypes from 'prop-types';

import FormTextInput from '../form-text-input';
import Button from '../button';
import Selection from '../selection';
import api from '../../js/api-helper';
import storage from '../../js/storage-helper';

class Form extends React.Component {
  static propTypes = {
    formId: PropTypes.string.isRequired,
    endpoint: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    roster: PropTypes.object.isRequired,
    levels: PropTypes.object.isRequired
  };

  static defaultProps = {
    title: {},
    description: {},
    roster: {},
    levels: {}
  };

  state = {
    isSaving: false
  };

  serialize = () => ({
    formId: this.props.formId,
    title: this.titleRef.serialize(),
    description: this.descriptionRef.serialize(),
    roster: this.rosterRef.serialize(),
    levels: this.levelsRef.serialize()
  });

  handleOnSaveDraft = () => {
    storage.saveToLocalStorage(this.props.formId, this.serialize());
  };

  onSubmit = () => {
    if (this.state.isSaving) {
      return;
    }

    this.setState({ isSaving: true }, () => {
      api
        .execute(this.props.endpoint, this.serialize())
        .then(() => {
          this.setState({ isSaving: false });
        })
        .catch(() => {
          this.setState({ isSaving: false });
        });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form">
          <div className="form__inputs">
            <div className="form__input">
              <FormTextInput
                ref={ref => (this.titleRef = ref)}
                {...this.props.title}
              />
            </div>
            <div className="form__input">
              <FormTextInput
                ref={ref => (this.descriptionRef = ref)}
                {...this.props.description}
              />
            </div>
            <div className="form__input">
              <Selection
                ref={ref => (this.rosterRef = ref)}
                {...this.props.roster}
              />
            </div>
            <div className="form__input">
              <Selection
                ref={ref => (this.levelsRef = ref)}
                {...this.props.levels}
              />
            </div>
          </div>
          <div className="form__action">
            <div className="form__action">
              <Button text="submit" onClick={this.onSubmit} />
            </div>
            <div className="form__action">
              <Button text="save draft" onClick={this.handleOnSaveDraft} />
            </div>

            <div className="form__action">
              <Button text="export settings" onClick={() => {}} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
