// Competency: Function + Looping + Conditional
/*

Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.

Contoh 1
--------
input: 3
x
oo
xxx

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo

*/

function drawLadder(row) {
  for (var c = 0; c < row; c++) {
    var b = '';
    if (c % 2 == 0) {
      d = 'x'
    } else {
      d = 'o';
    } for (var e = 0; e <= c; e++) {
      b += d + ' ';
    }
    console.log(b);
  }
}


console.log(drawLadder(3))
console.log(drawLadder(6))
