


export const SuccesText = ({counter}) => {
    return (

        <>
            <img 
                className="img_modal_1" 
                src={"https://media3.giphy.com/media/l4KhWPNyLHiB3TjVe/giphy.gif?cid=ecf05e4769fb3k86hcbcqojchube3ut4mpyz44inybwbb9ry&rid=giphy.gif&ct=g"} 
                alt="Ganador" 
            />
            <h1 className="title_modal_1" >Juego Finalizado</h1>
            <h2 className="title_modal_2">Ganaste</h2>
            <span className="text_1" >Felicidades lograste encontrar tu numero en {counter} intentos, ahora intentalo de nuevo 99 veces mas sin fallar para liberar a todos los prisioneros.</span> 
        </> 
    )
}