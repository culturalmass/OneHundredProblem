import { Box } from "./Box";
import { startingArray } from "../helpers/setArray";

export const BoxId = (props) => {

  const useArray = JSON.parse(localStorage.getItem("BoxArray"));

  const onCounter = (props) => {
    pasingCounter(props)
  };

  const pasingCounter = (value) => {
    props.passCounter(value)
  }; 

  return (
    <>
      {
        useArray === null ? startingArray.map((value, index) => 
          <Box
            key={index}
            position={index} 
            value={value}
            onCounter={onCounter}
          />
        ) : 
          useArray.map((value, index) => 
          <Box
            key={index}
            position={index} 
            value={value}
            onCounter={onCounter}
          />
        )
      }
    </>
  )
}