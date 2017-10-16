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
    var output='';
    for(var i=0;i<row;i++){
      if(i%2===0){
        output='x';
      }else{
        output='0';
      }
      for(var j=0;j<i;j++) {
          output+=output;
      }
      console.log(output);  
    }
  }
  
  
  console.log(drawLadder(3))
  console.log(drawLadder(6))
  
  