import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon';
import Modal from '../modal';

const Spinner = ({ isOpaque, isVisible, shouldTakeOverWholeScreen, text }) => {
  if (!isVisible) {
    return null;
  }

  const content = (
    <React.Fragment>
      <Icon className="spinner__twirler" name="spinner" />
      {text && <div className="spinner__text">{text}</div>}
    </React.Fragment>
  );

  if (shouldTakeOverWholeScreen) {
    return (
      <Modal isClosable={false} isVisible={isVisible}>
        {content}
      </Modal>
    );
  }

  return (
    <div className={cn('spinner', { 'spinner--opaque': isOpaque })}>
      {content}
    </div>
  );
};

Spinner.propTypes = {
  isOpaque: PropTypes.bool,
  isVisible: PropTypes.bool,
  shouldTakeOverWholeScreen: PropTypes.bool,
  text: PropTypes.string
};

export default Spinner;
