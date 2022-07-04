import {useState} from "react";
import { StartModal } from "./StartModal";

export const Box = ({onCounter, position, value, initial}) => {

  const [current, setCurrent] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (event) => {
    onCounter(event.target.innerText)
    if (current === false) {
      setCurrent(true)
    } else {
      setCurrent(false)
    }
  };
  const onBlock = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false)
  };
  
    return (
  <>
    <StartModal 
      isOpen={isOpen}
      onCloseModal={onCloseModal} 
    />
    <div className="box-face" >
      <h2 className="box-title">
        {position === "" ? "" : position+1 }
      </h2>
      <button 
        disabled={current ? true : false}
        onClick={initial!=="00" ? onChange : onBlock}
        className={current && initial!=="00"  ? "box-num_unhide" : "box-num_hide" }
      >
        {value}
      </button>
    </div>
  </>
  )
}