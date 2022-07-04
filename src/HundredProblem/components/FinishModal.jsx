import { FailureText } from './FailureText';
import { SuccesText } from './SuccesText';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%',
  },
  overlay: {
    backgroundColor: 'transparent'
  },
};

Modal.setAppElement('#root');

export const FinishModal = ({currentposition, initial=0, counter=0, onReset, isOpen, onCloseModal}) => {

  return(

      <Modal 
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="finish_window"
        ariaHideApp={false}
      >
        {
          (currentposition === initial.toString())  ? 

            <SuccesText counter={counter}/>

          : (counter >= 49) ?

            <FailureText />
          : ''
        }
      <button className="btn-primary_modal" onClick={onReset} >Intentar de nuevo</button> 
    </Modal>
    )
}
