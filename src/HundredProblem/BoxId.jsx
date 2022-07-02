import { Box } from "./Box";

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