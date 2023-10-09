import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl, onClose } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
