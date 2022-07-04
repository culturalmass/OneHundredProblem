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

export const FinishModal = ({currentposition, initial=0, counter=0, resTart, isOpen}) => {

  return(

      <Modal 
        isOpen={isOpen}
        style={customStyles}
        contentLabel="winner_window"
        ariaHideApp={false}
      >
        {
          (currentposition === initial.toString())  ? 

            <SuccesText counter={counter}/>

          : (counter >= 49) ?

            <FailureText />
          : ''
        }
      <button className="btn-primary_modal" onClick={resTart} >Intentar de nuevo</button> 
    </Modal>
    )
}
