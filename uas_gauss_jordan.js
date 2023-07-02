function convertMatriks(param) {
  for (let i = 0; i < param.length; i++) {
    for (let j = 0; j < param[i].length; j++) {
      param[i][j] = parseFloat(param[i][j]).toFixed(2);
    }
  }
  return param;
}

// 1. diberikan input matrix dengan 3 baris 4 kolom
function metodeEliminasiGaussJordan(matriks) {
  // 2. tukar baris pertama dengan baris kedua
  console.log("langkah ke-1 : ");
  console.log(matriks, "\n");

  for (let i = 0; i < matriks.length; i++) {
    if (matriks[i][i] === 0) {
      for (let j = 0; j < matriks[i].length; j++) {
        let temp = matriks[i][j];
        matriks[i][j] = matriks[i + 1][j];
        matriks[i + 1][j] = temp;
      }
    }
    // merubah angka pada baris 1 kolom 1 menjadi 1
    console.log("langkah ke-2 : ");
    let pivot = matriks[i][i];
    for (let j = 0; j < matriks[i].length; j++) {
      matriks[i][j] /= pivot;
      console.log(convertMatriks(matriks), "\n");
    }

    // console.log("langkah ke-3 : ");
    // for (let j = 0; j < matriks.length; j++) {
    //   if (j !== i) {
    //     let factor = matriks[j][i];
    //     for (let k = i; k < matriks[j].length; k++) {
    //       matriks[j][k] -= factor * matriks[i][k];
    //       console.log(convertMatriks(matriks), "\n");
    //     }
    //     // console.log(`i = ${i}, j = ${j}`);
    //   }
    // }
  }
  let result = [];
  for (let i = 0; i < matriks.length; i++) {
    result.push(matriks[i][matriks[i].length - 1]);
  }
  console.log("langkah ke-4 (hasilnya): ");
  return result;
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
let result = metodeEliminasiGaussJordan(matrix);
console.log(result);
