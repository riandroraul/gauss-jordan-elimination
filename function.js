const { stdout } = require("process");
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
  let arr = [];
  let data = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let a = await pertanyaan(`data[${i}][${j}] = `);
      data.push(Number(a));
    }
    arr.push(data);
    data = [];
  }
  // const namaBuku = await pertanyaan("masukkan nama buku : ");
  // const penerbit = await pertanyaan("masukkan nama penerbit : ");
  // const pengarang = await pertanyaan("masukkan nama pengarang : ");

  return arr
};

createMatrix();
