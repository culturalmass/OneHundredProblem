import { useState } from "react"
import { BoxId } from "./BoxId"

export const OneHundredProblemPage = () => {

  const [status, setStatus] = useState(false)
  const [initial, setInitial] = useState("00")

  const setApp = () => {
    const initialNum = Math.floor(Math.random()*101+1);
    setInitial(initialNum)
    if(status === true) {
      setStatus(false)
    } else {
      setStatus(true)
    }
  }

  const resTart = () => {
    window.location.reload(true);
  }

  return (
    <>
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
        <div className="box-container">
          <BoxId status={status} />
        </div>
      </main>
    </>
  )
}
