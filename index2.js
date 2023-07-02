// JavaScript Implementation for Gauss-Jordan
// Elimination Method

let M = 10;

// Function to print the matrix
function PrintMatrix(a, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) console.log(a[i][j] + " ");
    console.log("<br>");
  }
}

// function to reduce matrix to reduced
// row echelon form.
function PerformOperation(a, n) {
  let i,
    j,
    k = 0,
    c,
    flag = 0;

  // Performing elementary operations
  for (i = 0; i < n; i++) {
    if (a[i][i] == 0) {
      c = 1;
      console.log("while cond : ", n && a[i + c][i] == 0);
      // while (i + c < n && a[i + c][i] == 0) c++;
      // if (i + c == n) {
      //   flag = 1;
      //   break;
      // }
      for (j = i, k = 0; k <= n; k++) {
        let temp = a[j][k];
        a[j][k] = a[j + c][k];
        a[j + c][k] = temp;
      }
    }

    for (j = 0; j < n; j++) {
      // Excluding all i == j
      if (i != j) {
        // Converting Matrix to reduced row
        // echelon form(diagonal matrix)
        let pivot = a[j][i] / a[i][i];

        for (k = 0; k <= n; k++) a[j][k] = a[j][k] - a[i][k] * pivot;
      }
    }
  }
  return flag;
}

// Function to print the desired result
// if unique solutions exists, otherwise
// prints no solution or infinite solutions
// depending upon the input given.
function PrintResult(a, n, flag) {
  console.log("Result is : ");

  if (flag == 2) console.log("Infinite Solutions Exists<br>");
  else if (flag == 3) console.log("No Solution Exists<br>");
  // Printing the solution by dividing constants by
  // their respective diagonal elements
  else {
    for (let i = 0; i < n; i++) console.log(a[i][n] / a[i][i] + " ");
  }
}

// To check whether infinite solutions
// exists or no solution exists
function CheckConsistency(a, n, flag) {
  let i, j;
  let sum;

  // flag == 2 for infinite solution
  // flag == 3 for No solution
  flag = 3;
  for (i = 0; i < n; i++) {
    sum = 0;
    for (j = 0; j < n; j++) sum = sum + a[i][j];
    if (sum == a[i][j]) flag = 2;
  }
  return flag;
}

// Driver code
let a = [
  // [0, 2, 1, 4],
  // [1, 1, 2, 6],
  // [2, 1, 1, 7],
  [2, 3, -1, 5],
  [4, 4, -3, 3],
  [-2, 3, -1, 1],
];
// Order of Matrix(n)
let n = 3,
  flag = 0;

// Performing Matrix transformation
flag = PerformOperation(a, n);
console.log("flag", flag);
if (flag == 1) flag = CheckConsistency(a, n, flag);

// Printing Final Matrix
console.log("Final Augmented Matrix is : \n");
PrintMatrix(a, n);
console.log("\n");

// Printing Solutions(if exist)
PrintResult(a, n, flag);

// This code is contributed by rag2127
