// Jika pemakaian 45m3 maka tarif yang dikenakan adalah sebagai berikut.
// 10m3 pertama = 10 * 1000 	= 10000
// 10m3 berikutnya = 10 * 1500	= 15000
// 15m3 berikutnya = 15 * 2000	= 30000
// 10m3 sisanya = 10 * 3000	= 30000
// Total				= 85000

function tarifPemakaianAir(kubik) {
  let bayar = 0;
  if (kubik <= 10) {
    bayar = 10 * 1000;
  } else if (kubik <= 20) {
    bayar = 10 * 1000;
    bayar += 10 * 1500;
  } else if (kubik <= 35) {
    bayar = 10 * 1000;
    bayar += 10 * 1500;
    bayar += 15 * 2000;
  } else {
    bayar = 10 * 1000;
    bayar += 10 * 1500;
    bayar += 15 * 2000;
    bayar += 10 * 3000;
  }
  return bayar;
}

// let bayar = 0;
// for (let i = 1; i <= 10; i++) {
//   bayar += i === 10 ? i * 1000 : 0;
// }

let result = tarifPemakaianAir(45);
console.log("Jumlah yang harus dibayar : " + result);
// console.log(bayar);

function flowchart(a, b) {
  if (a <= 5) {
    b = 2 + a;
    a++;
    console.log("hasilnya : A = " + a, "B = " + b);
  } else if (b > a) {
    b = 1;
    for (b = 1; b <= 3; b++) {
      b *= 2;
      console.log("hasilnya : A = " + a, "B = " + b);
    }
  } else {
    a = a - 2;
    if (a >= 5) {
      a = a - 2;
      console.log("hasilnya : A = " + a, "B = " + b);
    } else {
      b * 2;
      console.log("hasilnya : A = " + a, "B = " + b);
    }
  }
}

console.log("no.2");

flowchart(3, 5);
flowchart(7, 8);

// 3

function belahKetupat(panjang) {
  let teks = "";
  for (let i = 1; i <= panjang; i++) {
    for (let j = panjang; j >= i; j--) {
      teks += " ";
    }
    for (let j = 1; j <= i; j++) {
      if (i % 2 == 0) {
        teks += "# ";
      } else {
        teks += "@ ";
      }
    }
    teks += "\n";
  }
  for (let i = 1; i <= panjang; i++) {
    for (let j = 1; j <= i; j++) {
      teks += " ";
    }
    for (let j = panjang; j >= i; j--) {
      if (i % 2 == 0) {
        teks += "# ";
      } else {
        teks += "@ ";
      }
    }
    teks += "\n";
  }
  return teks;
}

console.log(belahKetupat(4));

// 4

function pangkat(a, b) {
  return a ** b;
}

console.log(pangkat(2, 3));

// 5
function bilanganTerbesar(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  if (c > a && c > b) return c;
}

console.log(bilanganTerbesar(10, 7, 1));

// 6

function skalaRitcher(skala) {
  if (skala >= 0.0 && skala < 5.0) {
    return "Tidak ada kerusakan, jika ada hanya kerusakan kecil";
  } else if (skala >= 5.0 && skala < 5.5) {
    return "Beberapa bangunan akan rusak !";
  } else if (skala >= 5.5 && skala < 6.5) {
    return "Tembok retak atau roboh.";
  } else if (skala >= 6.5 && skala < 7.5) {
    return "Bahaya !, banyak bangunan dan gedung roboh.";
  } else {
    if (skala < 0) {
      return "not found";
    }
    return "Sangat Bahaya !, banyak bangunan dan gedung hancur.";
  }
}

console.log(skalaRitcher(7.5));

// 7

function tukarNilai() {
  let a = 5;
  let b = 6;

  let tempA = a;
  let tempB = b;

  a = tempB;
  b = tempA;

  return "A = " + a + " dan B = " + b;
}

console.log(tukarNilai());

// 8

function factorial(val) {
  let result = 1;
  for (let i = 2; i <= val; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(10));
