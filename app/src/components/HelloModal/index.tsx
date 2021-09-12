import { useEffect } from 'react'
import { FormEvent, useState, useContext } from 'react'
import { FiX } from 'react-icons/fi'
import Modal from 'react-modal'
import styles from './styles.module.scss'
Modal.setAppElement('#__next')
interface HelloModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
interface User {
  name: string;
  dateBirth: string;
  cpf: string;
  address: {
    cep: string;
    number: number;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
  }
}

export function HelloModal({ isOpen, onRequestClose }: HelloModalProps) {
  const [userName, setUserName] = useState<string>()
  useEffect(()=>{
    if(localStorage.getItem('@healthyFood:User')){
      let data = localStorage.getItem('@healthyFood:User')
      let {name: userName} = JSON.parse(data) as User
      setUserName(userName)
    }

  }, [])
  

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