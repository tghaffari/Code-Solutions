
function solution(matrix) {
  debugger;
  let sum = 0;
  const ghostIndexes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === 0) {
        ghostIndexes.push(k);
      }

      if (!ghostIndexes.includes(k)) {
        sum += matrix[i][k];
      }
    }
  }
  return sum;
}
