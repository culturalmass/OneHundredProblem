import {useState} from "react";

export const Box = ({onCounter, position, value}) => {

  const [current, setCurrent] = useState(false)

  const onChange = (event) => {
    onCounter(event.target.innerText)
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
        {position === "" ? "" : position+1 }
      </h2>
      <button 
        disabled={current ? true : false}
        onClick={onChange}
        className={current ? "box-num_black" : "box-num_white" }
      >
        {value}
      </button>
    </div>
  </>
  )
}
