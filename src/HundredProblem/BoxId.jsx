import { Box } from "./Box";

export const BoxId = () => {

  const newBoxs5 = []
  for (let i = 1; i < 101; i++) {
    newBoxs5.push(i)
  }
  let c = newBoxs5.length;
  while (--c > 0) {
    let randIndex = Math.floor(Math.random() * (c + 1));
    [newBoxs5[randIndex], newBoxs5[c]] = [newBoxs5[c], newBoxs5[randIndex]];
  }
  let getUniqueRandomNumbers = n => {
    let set = new Set()
    while (set.size < n) set.add(Math.floor(Math.random() * n))
    return Array.from(set)
  }
  let result = getUniqueRandomNumbers(newBoxs5.length).map(x => newBoxs5[x])

  return (
    <>
      {
        result.map((value, index) => 
        <Box key={index} position={index} value={value} />  
        )
      }
    </>
  )
}