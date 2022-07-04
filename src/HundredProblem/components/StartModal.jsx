import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '60%',
    left: '50%',
    right: '10%',
    bottom: '-10%',
    marginRight: '-45%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%',
    backgroundColor: '#E9EDFE'
  },
  overlay: {
    backgroundColor: 'trasparent'
  },
};

Modal.setAppElement('#root');

export const StartModal = ({isOpen, onCloseModal}) => {

  return(

      <Modal 
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="finish_window"
        ariaHideApp={false}
      >
        <h2 className='title_start'>¡Toca el boton Empezar!</h2>
    </Modal>
    )
}
