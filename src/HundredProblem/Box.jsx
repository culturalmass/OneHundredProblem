import {useState} from "react";

export const Box = (props) => {

  const [current, setCurrent] = useState(false)

  const onChange = (event) => {
    props.onCounter(event.target.innerText)
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
      <button 
        disabled={current ? true : false}
        onClick={onChange}
        className={current ? "box-num_black" : "box-num_white" }
      >
        {props.value}
      </button>
    </div>
  </>
  )
}
