import { FormEvent, useState, useContext } from 'react'
import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import styles from './styles.module.scss'
Modal.setAppElement('#__next')
interface HelloModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function HelloModal({ isOpen, onRequestClose }: HelloModalProps) {

  const {name: userName} = JSON.parse(localStorage.getItem('@healthyFood:User'))
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >

      <button
        type="button"
        onClick={onRequestClose}
        className={styles.reactModalClose}
      >
        <FiX size={24} color="#0c0c0c" onClick={onRequestClose} />
      </button>

      <div className={styles.modalContainer}>
        <strong>Hello {userName}</strong>
        <p>Welcome to Healthy Food</p>
        
      </div>

    </Modal>
  )

}