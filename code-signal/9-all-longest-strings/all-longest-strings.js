function solution(inputArray) {
  let maxLength = 0;
  const longestArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLength) {
      longestArray.push(inputArray[i]);
    }
  }
  return longestArray;
}
