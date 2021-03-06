/*
==================================
Array Mastery: Love Me Not
==================================

Nama:________

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
*/

function loveMeNot(decisions) {
  var nilaiTrue=0;
  var nilaiFalse=0;
  for(var a=0;a<decisions.length;a++){
    if(decisions[a]===true){
      nilaiTrue +=1;
    }else if(decisions[a]===false){
      nilaiFalse +=1;
    }
  }
    if(nilaiTrue>nilaiFalse){
      return "HE LOVES ME!";
    }else if(nilaiFalse>nilaiTrue){
      return "HE DOES NOT LOVE ME :(";
    }else if(nilaiTrue===nilaiFalse){
      return "GALAU";
    }
}
  
// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("