import { Box } from "./";
import { startingArray } from "../../helpers/setArray";

export const BoxId = ({passCounter, initial, setIsOpen}) => {

  const useArray = JSON.parse(localStorage.getItem("BoxArray"));

  const onCounter = (onCount) => {
    pasingCounter(onCount)
  };

  const pasingCounter = (onCount) => {
    passCounter(onCount)
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
            initial={initial}
            setIsOpen={setIsOpen}
          />
        ) : 
          useArray.map((value, index) => 
          <Box
            key={index}
            position={index} 
            value={value}
            onCounter={onCounter}
            initial={initial}
            setIsOpen={setIsOpen}
          />
        )
      }
    </>
  )
}



