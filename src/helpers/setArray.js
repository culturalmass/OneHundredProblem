
export const setArray = () => {

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
  const storageArray = localStorage.setItem("BoxArray", JSON.stringify(result))
}

export const startingArray = [11, 8, 55, 1, 63, 60, 15, 88, 91, 81, 72, 76, 9, 78, 94, 58, 89, 75, 25, 98, 50, 62, 85, 43, 49, 37, 67, 70, 16, 69, 84, 19, 51, 10, 46, 14, 59, 24, 40, 74, 4, 95, 39, 6, 73, 28, 12, 22, 26, 44, 66, 100, 31, 18, 57, 79, 5, 71, 86, 36, 87, 99, 2, 34, 27, 77, 41, 82, 80, 90, 64, 96, 56, 17, 47, 38, 7, 65, 54, 48, 23, 93, 97, 92, 68, 21, 53, 30, 52, 20, 35, 29, 3, 42, 32, 83, 61, 13, 33, 45];

