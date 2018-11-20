import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// TODO: chat client implemented as component AND page - backend sends url to chat page that we can open in new window

class ExternalWindow extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  state = {};

  externalWindow = null;

  container = document.createElement('div');

  componentDidMount() {
    this.openWindow();
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  openWindow = () => {
    this.externalWindow = window.open(
      '',
      'new window',
      'width=600,height=400,left=200,top=200'
    );

    this.externalWindow.document.body.appendChild(this.container);
  };

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

export default ExternalWindow;
