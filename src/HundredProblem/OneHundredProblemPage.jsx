import { useState } from 'react';
import { BoxId, FinishModal, TopStaticContent } from './components';
import { setArray } from '../helpers/setArray';

export const OneHundredProblemPage = () => {

  const [initial, setInitial] = useState("00");
  const [counter, setCounter] = useState(0);
  const [currentposition, setCurrentposition] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const setApp = () => {
    const initialNum = Math.floor(Math.random()*100+1);
    setInitial(initialNum)
    setArray()
  };
  
  const onReset = () => {
    window.location.reload(true);
  };

  const passCounter = (onCount) => {
    setCounter(counter+1)
    setCurrentposition(onCount)
      //_______final_game_state__________//
    if((onCount === initial.toString()) || (counter >= 49) ) {
      setIsOpen(true)
      }
    };

  const onCloseModal = () => {
    setIsOpen(false)
  };

  return (

    <>
      <main className="animate__animated animate__shakeY animate__fast">
        <FinishModal 
          isOpen={isOpen}
          onCloseModal={onCloseModal} 
          onReset={onReset} 
          currentposition={currentposition} 
          initial={initial} 
          counter={counter} 
        />
        <TopStaticContent initial={initial} />
        <div className="top"> 
          <button className="btn-primary" onClick={setApp} >Empezar</button>
          <h2 className="title" >Busca el numero { initial}</h2>
          <button className="btn-primary" onClick={onReset} >Reiniciar</button>
        </div>
        <h2 className="count_text" >Intentos restantes {50 - counter}</h2>
        <div className="box-container">
          <BoxId passCounter={passCounter} initial={initial} setIsOpen={setIsOpen} />
        </div>
      </main>
  </>
  )
}
