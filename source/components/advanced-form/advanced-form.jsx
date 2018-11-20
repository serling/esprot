import React from 'react';
import PropTypes from 'prop-types';

import storage from '../../js/storage-helper';
import Modal from '../modal';
import Form from '../form';
import Button from '../button';

class AdvancedForm extends React.Component {
  static propTypes = {
    form: PropTypes.shape({
      formId: PropTypes.string.isRequired,
      schemaVersion: PropTypes.string.isRequired
    }).isRequired
  };

  state = {
    showStorageModal: false,
    form: this.props.form
  };

  handleOnModalConfirmation = () => {
    this.localForm = storage.loadFromLocalStorage(this.props.form.formId);

    this.setState(
      {
        form: { ...this.props.form, ...this.localForm }
      },
      () => {
        console.log('after confirming and setting state: ', this.state);
        this.handleOnToggleModal();
      }
    );
  };

  handleOnModalCancel = () => {
    storage.clearLocalStorage(this.props.form.formId);

    this.handleOnToggleModal();
  };

  handleOnToggleModal = () => {
    this.setState(state => ({
      showStorageModal: !state.showStorageModal
    }));
  };

  componentDidMount() {
    if (storage.checkLocalStorage(this.props.form.formId)) {
      //TODO: if (this.props.schemaVersion === local schemaVersion)
      this.handleOnToggleModal();
    }
  }

  render() {
    return (
      <div className="advanced-form">
        <div className="advanced-form__form">
          {!this.state.showStorageModal && <Form {...this.state.form} />}
        </div>
        <Modal
          isVisible={this.state.showStorageModal}
          onClose={this.handleOnToggleModal}
          isClosable={false}
        >
          <p>Hey, we found some junk in your local storage. Retrieve?</p>
          <Button text="yes" onClick={this.handleOnModalConfirmation} />
          <Button text="no, delete" onClick={this.handleOnModalCancel} />
        </Modal>
      </div>
    );
  }
}

export default AdvancedForm;
