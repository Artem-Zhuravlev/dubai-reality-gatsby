import React, { ReactNode, memo } from 'react';
import Modal from 'react-modal';
import { useModal } from 'context/ModalContext';
import './ModalWindow.scss';


interface ModalWindowProps {
  children: ReactNode;
  isOpen: boolean;
}

export const ModalWindow = memo((props: ModalWindowProps) => {
  const {
    children,
    isOpen
  } = props;
  const {closeModal } = useModal();

  return (
    <Modal
      className="modal-window"
      overlayClassName="modal-window__overlay"
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div className="modal-window__content">
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className='modal-window__close-btn'
        />
        {children}
      </div>
    </Modal>
  );
});