import { useState } from "react";

export const Box = (props) => {

  const [current, setCurrent] = useState(false)
  const [counter, setCounter] = useState(0)

  const onChange = (event) => {
    if(event) {
      setCounter(counter+1)
      console.log(event)
    }

    // console.log("Cuantas Cajas llevas")

    if (current === false) {
      setCurrent(true)
    } else {
      setCurrent(false)
    }
  }


  return (
  <>
    <div className="box-face" >
      <h2 className="box-title">
        {props.position === "" ? "" : props.position+1 }
      </h2>
      <h2 
        onClick={onChange}
        className={current ? "box-num_black" : "box-num_white" }
      >
        {props.value}
      </h2>
    </div>
  </>
  )
}


