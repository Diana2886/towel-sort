
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  if (arguments.length === 0) return [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let c = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      newMatrix.push(matrix[i][c]);
    }
  }
  return newMatrix;
}
