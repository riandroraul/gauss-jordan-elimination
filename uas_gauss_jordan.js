const createMatrix = require("./function");

// [
//   [0, 2, 1, 4],
//   [1, 1, 2, 6],
//   [2, 1, 1, 7],
// ];
function convertMatriks(param) {
  for (let i = 0; i < param.length; i++) {
    for (let j = 0; j < param[i].length; j++) {
      param[i][j] = parseFloat(param[i][j]).toFixed(2);
    }
  }
  return param;
}

/*
*
selesaikan sistem persamaan berikut menggunkan metode eliminasi gauss jordan
1.  x + y + 2z = 9      
    2x + 4y - 3z = 1
    3x + 6y - 5z = 0

2.  2y + z = 4
    x + y + 2z = 6
    2x + y + z = 7
*/

function metodeEliminasiGaussJordan(matriks) {
  console.log("langkah ke-1 : ");
  console.log(matriks, "\n");

  // [
  //   [0, 2, 1, 4],
  //   [1, 1, 2, 6],
  //   [2, 1, 1, 7],
  // ];
  for (let i = 0; i < matriks.length; i++) {
    if (matriks[i][i] === 0) {
      for (let j = 0; j < matriks[i].length; j++) {
        let temp = matriks[i][j];
        matriks[i][j] = matriks[i + 1][j];
        matriks[i + 1][j] = temp;
      }
    }
    console.log("langkah ke-2 : ");
    let pivot = matriks[i][i];
    for (let j = 0; j < matriks[i].length; j++) {
      matriks[i][j] /= pivot;
      console.log(convertMatriks(matriks), "\n");
    }

    console.log("langkah ke-3 : ");
    for (let j = 0; j < matriks.length; j++) {
      if (j !== i) {
        let factor = matriks[j][i];
        for (let k = i; k < matriks[j].length; k++) {
          matriks[j][k] -= factor * matriks[i][k];
          console.log(convertMatriks(matriks), "\n");
        }
      }
    }
  }
  let result = [];
  for (let i = 0; i < matriks.length; i++) {
    result.push(matriks[i][matriks[i].length - 1]);
  }
  console.log("langkah ke-4 (hasilnya): ");
  return {
    X: parseFloat(result[0]),
    Y: parseFloat(result[1]),
    Z: parseFloat(result[2]),
  };
}

const matrix = [
  [2, 3, -1, 5],
  [4, 4, -3, 3],
  [-2, 3, -1, 1],
];

let matriks = [
  [0, 2, 1, 4],
  [1, 1, 2, 6],
  [2, 1, 1, 7],
];

// let array = createMatrix().then((res) => res);

createMatrix().then((res) => {
  console.log(metodeEliminasiGaussJordan(res));
});
// let result = metodeEliminasiGaussJordan(coba2);
// console.log(result);
