// Buatlah sebuah fungsi dengan nama balikString. 
// Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

function balikString(str) {
    var balik = '';
    for (var i = str.length - 1; i >= 0; i--)
    balik = balik + str[i];
    return balik;
  }
console.log(balikString('hello world!'))