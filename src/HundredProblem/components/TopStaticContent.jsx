


export const TopStaticContent = ({initial}) => {
  return (
    <>
        <h1>El problema de los 100 prisioneros</h1>
        <span className="text_1">...En este problema, 100 prisioneros numerados deben encontrar sus propios
        números en uno de las 100 cajas para poder sobrevivir. Las reglas establecen que
        cada recluso puede abrir solo 50 cajas y no puede comunicarse con otros reclusos.
        A primera vista, la situación parece desesperada, pero una estrategia inteligente ofrece
        a los prisioneros una posibilidad real de supervivencia. </span>
        <span className="text_2">...Tendras 30 % de probabilidades de poder encontrar tu numero si empiezas la busqueda
        abriendo la caja numero {initial}, continua anidando los numeros de las cajas hasta encontrar tu numero... Suerte </span>
    </>
  )
}
