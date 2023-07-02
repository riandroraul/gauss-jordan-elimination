// 1. diberikan input matrix dengan 3 baris 4 kolom
function metodeEliminasiGaussJordan(matriks) {
  // 2. tukar baris pertama dengan baris kedua
  console.log("langkah ke-1 : ");
  console.log(matriks, "\n");

  for (let i = 0; i < matriks.length; i++) {
    if (matriks[i][i] === 0) {
    }
  }

  console.log("langkah ke-2 : ");
  console.log(matriks, "\n");

  let duaKaliR1 = [];
  let setengahKaliR2 = [];
  let tigaPerLimaKaliR3 = [];
  let duaPerLimaKaliR3 = [];

  // 3. melakukan operasi pada baris ketiga R3 = R3 - 2 * R1
  for (let i = 0; i < matriks[0].length; i++) {
    duaKaliR1.push(matriks[0][i] * 2);
  }
  for (let i = 0; i < duaKaliR1.length; i++) {
    matriks[2][i] -= duaKaliR1[i];
  }
  console.log("langkah ke-3 : ");
  console.log(matriks, "\n");

  // 4. melakukan operasi pada baris pertama dan baris ketiga R1 = R1 – ((1/2)* R2) dan R3 = R3 + ((1/2)*R2)
  for (let i = 0; i < matriks[0].length; i++) {
    setengahKaliR2.push(matriks[1][i] * 0.5);
  }

  for (let i = 0; i < duaKaliR1.length; i++) {
    matriks[0][i] -= setengahKaliR2[i];
  }

  for (let i = 0; i < duaKaliR1.length; i++) {
    matriks[2][i] += setengahKaliR2[i];
  }

  console.log("langkah ke-4 : ");
  console.log(matriks, "\n");
  // 5. melakukan operasi pada baris pertama dan baris kedua R1 = R1 + ((3/5)*R3) dan R2 = R2 + ((2/5)*R3)
  for (let i = 0; i < matriks[2].length; i++) {
    tigaPerLimaKaliR3.push(matriks[2][i] * 0.6);
  }

  for (let i = 0; i < matriks[2].length; i++) {
    duaPerLimaKaliR3.push(matriks[2][i] * 0.4);
  }
  for (let i = 0; i < tigaPerLimaKaliR3.length; i++) {
    matriks[0][i] += tigaPerLimaKaliR3[i];
  }

  for (let i = 0; i < duaPerLimaKaliR3.length; i++) {
    matriks[1][i] += duaPerLimaKaliR3[i];
  }

  console.log("langkah ke-5 : ");
  console.log(matriks, "\n");

  // 6. terakhir membagi kolom terakhir dengan elemen diagonal
  let result = [];
  result.push(matriks[0][matriks[0].length - 1] / matriks[0][0]);
  result.push(matriks[1][matriks[1].length - 1] / matriks[1][1]);
  result.push(matriks[2][matriks[2].length - 1] / matriks[2][2]);
  console.log("langkah ke-6 (hasilnya): ");
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
let result = metodeEliminasiGaussJordan(matriks);
console.log(result);
