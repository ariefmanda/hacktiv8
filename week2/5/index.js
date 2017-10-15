var namaCowok,namaCewek;
var nilaiCowok=0;
var nilaiCewek=0;
var nilai,hasil;
var tokoh;
var kekuatan;

function intro(){
tokoh=prompt("Masukkan tokoh anda (penembak/samurai)");
  if(tokoh==='penembak'){
      kekuatan=['shortgun','gunkong'];
  }
  else if(tokoh==='samurai'){
      kekuatan=['blidecat','blidekong'];
  }
  else{
    return clear();
  }
  console.log('Selamat datang saudara '+tokoh+', anda bisa menggunakan kekuatan anda untuk melawan monster yang memiliki kapasitas kekuatan yang berbeda-beda');
  console.log('Saudara '+tokoh+' memiliki '+kekuatan.length+' kemampuan yakni '+kekuatan+'\nDengan syarat kekuatan kedua yakni '+kekuatan[1]+' hanya bisa digunakan jika telah menggunakan kekuatan yang pertama yakni '+kekuatan[0]+' sebanyak 2 kali.' );
  console.log('Jika tidak maka score tidak akan di kurangi dengan planing penyerangan anda.\nJika sudah paham dan ingin melanjutkan ketik sesi(1) di console');
}
function konvert(nil){
  if(nil==='a'||nil==='A'||nil==='J'||nil==='j'||nil==='s'||nil==='S'){
    nilai=1;
  }else if(nil==='b'||nil==='B'||nil==='K'||nil==='k'||nil==='t'||nil==='T'){
    nilai=2;
  }else if(nil==='c'||nil==='C'||nil==='L'||nil==='l'||nil==='u'||nil==='U'){
    nilai=3;
  }else if(nil==='d'||nil==='D'||nil==='M'||nil==='m'||nil==='V'||nil==='v'){
    nilai=4;
  }else if(nil==='e'||nil==='E'||nil==='N'||nil==='n'||nil==='W'||nil==='w'){
    nilai=5;
  }else if(nil==='f'||nil==='F'||nil==='O'||nil==='o'||nil==='x'||nil==='X'){
    nilai=6;
  }else if(nil==='g'||nil==='G'||nil==='p'||nil==='P'||nil==='Y'||'y'){
    nilai=7;
  }else if(nil==='h'||nil==='H'||nil==='Q'||nil==='q'||nil==='z'||nil==='Z'){
    nilai=8;
  }else{
    nilai=9;
  }
  return nilai;
}
function hitungRamalan(CO,CE){
  var splitCO= CO.split(' ');
  var splitCE= CE.split(' ');
  for(var a=0;a<splitCO.length;a++){
    var hurCO= splitCO[a].split('');
    nilai=konvert(hurCO[0]);
    nilaiCowok=nilaiCowok+nilai;
  }
  for(var b=0;b<splitCE.length;b++){
    var hurCE= splitCE[b].split('');
    nilai=konvert(hurCE[0]);
    nilaiCewek=nilaiCewek+nilai;
  }
  hasil=nilaiCowok+nilaiCewek;
  penjelasan(hasil);
}
function penjelasan(hsl){
  if(hsl<=9){
    console.log("Kamu dan dia tipe pasangan yang memiliki pandangan sama dalam hampir setiap hal. Untuk itu, kalian termasuk pasangan yang cocok sehingga mampu menghadapi aral maupun rintangan dalam menjalani kisah cinta dengan mudah. Kerjasama yang baik disertai saling terbuka satu sama lain akan sangat menentukan bagaimana kamu dan dia mampu menjalani hubungan menjadi lebih lama atau bahkan berjalan selamanya.Di dalam unsur semesta, kalian adalah air, bisa menjadi sesuatu yang sangat tenang namun bisa juga bergejolak secara tiba-tiba. Cinta kalian adalah misteri, namun bukanlah misteri yang tak terpecahkan. Hanya kamu dan dia yang akan dapat menemukan kebahagiaan sejati dibalik misteri cinta tersebut.\nBaca dari atas")
    console.log("(console)Jika ingin melanjutkan lagi ketikan ramal()");
    console.log("(console)Jika tidak ingin melanjutkan ketikan clear()");
  }else if(hsl>=10&&hsl<=19){
    console.log("Semesta menandai bahwa pasangan dengan angka ini berarti dalam urutan unsur api. Semakin besar kobaran cinta yang kalian miliki, semakin besar pula resiko untuk saling terbakar satu sama lain. Para ahli ramal sepakat memutuskan bahwa pasangan unsur api merupakan jalinan asmara yang paling menarik bila dibandingkan dengan unsur-unsur lainnya. Percintaan yang kalian jalani bisa menjadi petualangan yang tak pernah dapat dilupakan karena jika kalian dapat mengendalikan panasnya api justru hal itu akan menjadi kehangatan cinta yang luar biasa.\nBaca dari atas")
    console.log("(console)Jika ingin melanjutkan lagi ketikan ramal()");
    console.log("(console)Jika tidak ingin melanjutkan ketikan clear()");
  }else if(hsl>=20&&hsl<=29){
    console.log("Tanah menandakan sebuah kesuburan, seperti halnya cinta kamu dengannya yang berada pada unsur ini. Dalam pandangan semesta, hal ini berarti bahwa hubungan kamu bersamanya cenderung akan berjalan dengan baik apabila kamu mampu merawatnya secara benar. Tak ubahnya seperti benih yang ditanam pada media tanah, kamu harus merawatnya dengan penuh cinta dan kesabaran agar tanaman tersebut dapat bersemi dengan indah. Jika kamu tidak melakukan itu, maka benih yang kamu tanam akan mati, begitu pula dengan cinta yang kamu semai dihatinya juga akan menghilang. Untuk itu, jagalah hubungan kamu dengannya sebaik mungkin.\nBaca dari atas")
    console.log("(console)Jika ingin melanjutkan lagi ketikan ramal()");
    console.log("(console)Jika tidak ingin melanjutkan ketikan clear()");
  }else if(hsl>=30&&hsl<=39){
    console.log("Angka ini menandakan bahwa ramalan cinta kalian berada dibawah lingkaran unsur kayu. Diantara empat unsur yang lain, yaitu air, api, tanah dan angin, kayu bersifat lebih mudah terbakar, artinya, hindarilah kebiasaan yang dapat membuat pasangan merasa cemburu. Selain itu, kayu juga memiliki karakter mengapung saat berada diatas air yang berarti jika kalian dapat menjalani hubungan dengan baik, maka tujuan utama dari cinta kalian akan mudah diraih seperti air yang mengalir.\nBaca dari atas")
    console.log("(console)Jika ingin melanjutkan ketikan ramal()");
    console.log("(console)Jika tidak ingin melanjutkan ketikan clear()");
  }
  else if(hsl>=40){
    console.log("Dari beberapa unsur yang terdapat pada alam semesta, kalian diramalkan memiliki hubungan erat dengan unsur angin atau udara. Sebuah pertanda bahwa cinta kalian adalah antara ada dan tiada. Udara merupakan sesuatu yang tidak tampak namun sangat diperlukan oleh semua orang untuk bernafas. Cinta kalian diibaratkan seperti udara, yang berarti saat bersama kalian mungkin tidak menyadari bahwa satu sama lain sebenarnya saling membutuhkan, namun ketika salah satu dari kalian tidak ada, maka barulah disadari jika ternyata kamu dan dia memang ditakdirkan sulit untuk dipisahkan.\nBaca dari atas")
    console.log("(console)Jika ingin melanjutkan lagi ketikan ramal()");
    console.log("(console)Jika tidak ingin melanjutkan ketikan clear()");
  }
  else{
    console.log("Hasil anda tidak sesuai dengan buku ramalan Wijaya Kusuma")
    console.log("(console)Jika ingin melanjutkan lagi ketikan ramal()");
    console.log("(console)Jika tidak ingin melanjutkan ketikan clear()");
  }
}
function ramal(){
  console.clear();
  namaCowok=prompt("Masukkan Nama Lengkap Anda");
  namaCewek=prompt("Masukkan Nama Lengkap Pasangan Anda");
  hitungRamalan(namaCewek,namaCowok);
}
function clear(){
  console.clear();
  console.log("Thankyou");
}
function sesi(a){
    if(a===1||a==='1'){
        score=45;
        var soal=prompt('Anda memiliki 2 senjata dengan senjata pertama yakni '+kekuatan[0]+' Kode No=1, dengan daya hancur kekuatan yakni 5 dan senjata kedua yakni '+kekuatan[1]+' Kode No =2, dengan daya hancur kekuatan yakni 10. Dengan syarat kekuatan kedua yakni '+kekuatan[1]+' hanya bisa digunakan jika telah menggunakan kekuatan yang pertama yakni '+kekuatan[0]+' sebanyak 2 kali. Anda diminta mengramal bagaimana teknik serang anda melawan monster dengan kapasitas darah '+score+'. silahkan masukkan 8 tahapan kodenomor senjata yang akan anda gunakan tanpa spasi (contoh:1121112):')
        var hasil=perang(soal,score);
        if(hasil===0){
            console.log('Selamat anda telah menghabisi musuh dengan baik dan mendapatkan bonus kesempatan untuk diramal dengan pasangan anda');
            console.log("(console)Jika ingin melanjutkan, ketikan ramal()");
            console.log("(console)Jika tidak ingin melanjutkan, ketikan clear()");
        }
        else{
          console.log('Sayang sekali anda telah kalah dan ulangi lagi game ini dengan mengetikkan sesi(1) lagi sampai anda mendapatkan bonus ramal cinta dari Bapak wijaya kusuma di Game ini.. Thankyou')
        }
    }
}
function perang(a,b){
    var score=b;
    var c=a.split('');
    if(c.length<=8){
        for(d=0;d<c.length;d++){
            if(c[d]==='2'){
                if(c[d-1]==='1'&&c[d-2]==='1'){
                    score=score-10;
                    console.log('saudara '+tokoh+' menyerang monster dan berkurang menjadi '+score+' dengan kekuatan senjata '+kekuatan[1]+ '');
                }else if((c[d-1]==='2'&&c[d-2]==='1')||(c[d-1]==='1'&&c[d-2]==='2')){
                    console.log('Maaf kekuatan senjata '+kekuatan[1]+' belum aktif');
                }
            }else if(c[d]==='1'){
                score=score-5;
                console.log('saudara '+tokoh+' menyerang monster dan berkurang menjadi '+score+' dengan kekuatan senjata '+kekuatan[0]+ '');
            }
        }
        return score;
    }else{
        console.log('Maaf inputan anda lebih dari 8');
        return score;
    }
}
console.log('Hei nama saya arief trimanda,, jika ingin melanjutkan silahkan ketik intro() di console ini.. Thankyou');