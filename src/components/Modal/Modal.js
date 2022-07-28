import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
   
  }

    handleKeyDown = evt => {
        if (evt.key === 'Escape'){
            this.props.onClose();
        }
    }

    handleOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    }

    

    render() {
        return createPortal(
          <div className={s.Overlay} onClick={this.handleOverlay}>
            <div className={s.Modal}>
              {this.props.children}
            </div>
          </div>,
          modalRoot
        );
      }
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;



