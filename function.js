// const fs = require('fs');
// readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (value) => {
      resolve(value);
    });
  });
};

const createMatrix = async () => {
  let row = [];
  let column = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let a = await pertanyaan(`baris[${i + 1}]kolom[${j + 1}] = `);
      column.push(Number(a));
      // [2,3,4,5],
      // [2,3,4,5],
      // [2,3,4,5],
    }
    row.push(column);
    // [
    //   [2,3,4,5],
    //   [2,3,4,5],
    //   [2,3,4,5],
    // ]
    column = [];
  }
  rl.close();
  // const namaBuku = await pertanyaan("masukkan nama buku : ");
  // const penerbit = await pertanyaan("masukkan nama penerbit : ");
  // const pengarang = await pertanyaan("masukkan nama pengarang : ");

  return row;
};

// createMatrix().then((res) => console.log(res));

module.exports = createMatrix;
