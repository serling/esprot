import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import TabTrapper from './tab-trapper';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    closeButtonText: PropTypes.string,
    isVisible: PropTypes.bool,
    isClosable: PropTypes.bool,
    isOpaque: PropTypes.bool,
    onClose: PropTypes.func // will be triggered by click on close button, modal background or by pressing the esc key
  };

  static defaultProps = {
    closeButtonText: 'Close',
    isClosable: true,
    onClose: () => {}
  };

  state = {};

  externalWindow = null;

  componentDidMount() {
    if (this.props.isClosable) {
      this.modal.addEventListener('keyup', this.handleEscPress);
    }

    this.setState({
      fitsOnScreen: this.modal.offsetHeight < window.innerHeight
    });
  }

  componentWillUnmount() {
    if (this.props.isClosable) {
      this.modal.removeEventListener('keyup', this.handleEscPress);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isVisible !== prevProps.isVisible && this.props.isVisible) {
      this.onAfterShowModal();
    }
  }

  onAfterShowModal = () => {
    // Wait one frame before focusing
    requestAnimationFrame(() => {
      this.modal.focus();
      this.modalWrapper.scrollTop = 0;
    });

    this.setState(
      {
        fitsOnScreen: this.modal.offsetHeight < window.innerHeight
      },
      () => {
        this.setState({ contentHeight: this.modalWrapper.scrollHeight });
      }
    );
  };

  handleEscPress = e => {
    if (!this.props.isClosable) {
      return;
    }

    if (e.which === 27) {
      this.props.onClose();
    }
  };

  render() {
    const ariaProps = { 'aria-modal': true, role: 'dialog' };
    const bodyElement = typeof document !== 'undefined' && document.body;

    return !bodyElement
      ? null
      : ReactDOM.createPortal(
          <div
            className={cn('modal', {
              'modal--unclosable': !this.props.isClosable,
              'modal--is-visible': this.props.isVisible,
              'modal--fits-on-screen': this.state.fitsOnScreen
            })}
            ref={d => (this.modalWrapper = d)}
            {...ariaProps}
          >
            <div
              className={cn('modal__background', {
                'modal__background--opaque': this.props.isOpaque
              })}
              style={{
                minHeight: this.state.contentHeight
              }}
              onClick={this.props.onClose}
            />

            <div
              className="modal__content"
              ref={d => (this.modal = d)}
              tabIndex={-1}
            >
              <TabTrapper isActive={this.props.isVisible}>
                {this.props.children}
                {this.props.isClosable && (
                  <button className="modal__close" onClick={this.props.onClose}>
                    {this.props.closeButtonText}
                  </button>
                )}
              </TabTrapper>
            </div>
          </div>,
          bodyElement
        );
  }
}

export default Modal;
