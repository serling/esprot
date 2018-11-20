import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../modal';
import Spinner from '../spinner';
import ExternalWindow from '../external-window';

class ModalOpener extends React.Component {
  static propTypes = {
    /* ---------------------- 📝 ---------------------- */
  };

  state = {
    isOpen: false,
    externalIsOpen: false,
    counter: 0
  };

  toggleModal = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  openWindow = () => {
    this.setState(state => ({
      externalIsOpen: !state.externalIsOpen
    }));
  };

  render() {
    return (
      <div className="modal-opener">
        <button onClick={this.toggleModal}>modal</button>
        <button onClick={this.openWindow}>open content in new window</button>

        {this.state.externalIsOpen && (
          <ExternalWindow>
            <div>hahahahah</div>
          </ExternalWindow>
        )}

        <Modal
          isVisible={this.state.isOpen}
          onClose={this.toggleModal}
          isClosable={true}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            explicabo recusandae obcaecati, error officia quo vitae vero
            perspiciatis quis id maxime atque reprehenderit quasi, suscipit
            laudantium rerum? Dolorum, quam? Magni.
          </p>
        </Modal>
      </div>
    );
  }
}

export default ModalOpener;
