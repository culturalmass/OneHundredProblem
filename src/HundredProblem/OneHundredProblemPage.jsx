import { useState } from 'react';
import { BoxId } from './BoxId';
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

export const OneHundredProblemPage = () => {

  const [initial, setInitial] = useState("00")
  const [counter, setCounter] = useState(1)
  const [currentposition, setCurrentposition] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal= () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const setApp = () => {
    const initialNum = Math.floor(Math.random()*101+1);
    setInitial(initialNum)
  }
  
  const resTart = () => {
    window.location.reload(true);
  }

  const passCounter = (props) => {
    setCounter(counter+1)
    setCurrentposition(props)
      //_______final_game_state__________//
    if((props === initial.toString()) || (counter >= 50) ) {
      openModal()
      }
    }

  return (
    <>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="winner_window"
        ariaHideApp={false}
      >
        {
          (currentposition === initial.toString())  ? 
            <>
              <img className="img_modal_1" src={"https://media3.giphy.com/media/l4KhWPNyLHiB3TjVe/giphy.gif?cid=ecf05e4769fb3k86hcbcqojchube3ut4mpyz44inybwbb9ry&rid=giphy.gif&ct=g"} alt="Ganador" />
              <h1 className="title_modal_1" >Juego Finalizado</h1>
              <h2 className="title_modal_2">Ganaste</h2>
              <span className="text_1" >Felicidades lograste encontrar tu numero, ahora intentalo de nuevo 99 veces mas sin fallar para liberar a todos los prisioneros.</span> 
            </> 
          : (counter >= 50) ?
            <>
              <img className="img_modal_2" src={"https://media3.giphy.com/media/3oKGzx4ADEPeoGKnHa/giphy.gif?cid=ecf05e4732fvsgts2fq45qu06ghx0ffepw814zrvmkag2v8y&rid=giphy.gif&ct=g"} alt="Perdedor" />
              <h1 className="title_modal_1" >Juego Finalizado</h1>
              <h2 className="title_modal_2">Perdiste</h2>
              <span className="text_1" >No lograste encontrar tu numero en los 50 intentos, los 99 prisioneros restantes pasaron a mejor vida muy agradecidos.</span>
            </>
          : ''
        }
      <button className="btn-primary_modal" onClick={resTart} >Intentar de nuevo</button> 
    </Modal>
    <main className="animate__animated animate__shakeY animate__fast">
      <h1>El problema de los 100 prisioneros</h1>
      <span className="text_1">...En este problema, 100 prisioneros numerados deben encontrar sus propios
          números en uno de las 100 cajas para poder sobrevivir. Las reglas establecen que
          cada recluso puede abrir solo 50 cajas y no puede comunicarse con otros reclusos.
            A primera vista, la situación parece desesperada, pero una estrategia inteligente ofrece
            a los prisioneros una posibilidad real de supervivencia. </span>
      <span className="text_2">...Tendras 30 % de probabilidades de poder encontrar tu numero si empiezas la busqueda
          abriendo la caja numero {initial}, continua anidando los numeros de las cajas hasta encontrar tu numero... Suerte </span>
      <div className="top"> 
        <button className="btn-primary" onClick={setApp} >Empezar</button>
        <h2 className="title" >Busca el numero { initial}</h2>
        <button className="btn-primary" onClick={resTart} >Reiniciar</button>
      </div>
      <h2 className="count_text" >Intentos restantes {51 - counter}</h2>
      <div className="box-container">
        <BoxId passCounter={passCounter}  />
      </div>
    </main>
  </>
  )
}
