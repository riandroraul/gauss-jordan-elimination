function gaussJordanElimination(matrix) {
  // [
  //   [1, 2, 3, 4],
  //   [5, 6, 7, 8],
  //   [9, 5, 6, 7],
  // ];

  // Mengecek apakah matriks merupakan matriks persegi
  const panjangBaris = matrix.length;
  const panjangKolom = matrix[0].length;
  if (panjangBaris !== panjangKolom - 1) {
    throw new Error("Matriks bukan merupakan matriks persegi augmented.");
  }

  // Proses eliminasi Gauss-Jordan
  for (let i = 0; i < panjangBaris; i++) {
    // Mencari elemen utama di diagonal
    // pivot adalah elemen di baris pertama dan kolom pertama
    let pivot = matrix[i][i];
    if (pivot === 0) {
      throw new Error(
        "Elemen utama di diagonal nol, solusi tidak dapat ditemukan."
      );
    }

    // Membuat elemen utama menjadi 1
    for (let j = i; j < panjangKolom; j++) {
      matrix[i][j] /= pivot;
      console.log(matrix);
    }

    // Membuat elemen-elemen di atas dan di bawah elemen utama menjadi nol
    // console.log(matrix);
    // [
    //   [1, 1.5, -0.5, 2.5],
    //   [4, 4, -3, 3],
    //   [-2, 3, -1, 1],
    // ];
    for (let k = 0; k < panjangBaris; k++) {
      if (k !== i) {
        let factor = matrix[k][i];
        // console.log("factor", factor);
        for (let j = i; j < panjangKolom; j++) {
          // console.log("matrix[k][j]", matrix[k][j]);
          // console.log("matrix[i][j]", matrix[i][j]);
          matrix[k][j] -= factor * matrix[i][j];
        }
      }
    }
    // console.log("matriks : ", matrix);
  }

  // Mengembalikan solusi
  const solution = [];
  for (let i = 0; i < panjangBaris; i++) {
    solution.push(matrix[i][panjangKolom - 1]);
  }
  // [
  //   [1, 0, 0, 1],
  //   [0, 1, 0, 2],
  //   [0, 0, 1, 3],
  // ];
  return solution;
}

// Contoh penggunaan fungsi
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
try {
  const solution = gaussJordanElimination(matrix);
  console.log("Solusi sistem persamaan linear:");
  console.log("x =", solution[0]);
  console.log("y =", solution[1]);
  console.log("z =", solution[2]);
} catch (error) {
  console.log("Error:", error.message);
}
