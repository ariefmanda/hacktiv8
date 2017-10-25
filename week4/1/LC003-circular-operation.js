/*
===================================
Array Mastery: Circular Operation
===================================

Nama:________

[INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (+) dan kurang (-).

Function circularOperation akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol +, dan - berturut-turut.
Simbol akan berotasi kembali ke + jika operasi - sudah dilakukan, sampai semua angka selesai di proses.

Gambaran Proses:
0 + angka pertama - angka kedua + angka ketiga - angka keempat + angka kelima - angka keenam + ... (dan seterusnya)


Function akan mereturn hasil kalkulasi dari operasi tersebut.
Jika tidak ada angka yang diberikan, function akan me-return 0.

Aturan: proses operasi satu per satu, dan TIDAK ADA aturan matematika yang harus memproses * sebelum + / !

[CONTOH]
input: [1, 2, 3, 4, 5]
proses: 0 + 1 - 2 + 3 - 4 + 5
output: 3

input: [5, 4, 3, 2, 1, 2]
proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
output: 1

input: [1, 1, 1, 1]
proses: 0 + 1 - 1 + 1 - 1
output: 0

input: []
proses: 0
output: 0
*/

function circularOperation(numbers) {
  var tambah=0;
  for(var a=0;a<numbers.length;a++){
    if(a%2===0){
      tambah += numbers[a];
    }else{
      tambah -= numbers[a];
    }
  }
  return tambah;
}
  
// TEST CASES
console.log(circularOperation([1, 2, 3, 4, 5])); // 3
console.log(circularOperation([5, 4, 3, 2, 1, 2])); // 1
console.log(circularOperation([1, 1, 1, 1])); // 0
console.log(circularOperation([0, 10, 2, 5, 7])); // -6
console.log(circularOperation([])); // 0