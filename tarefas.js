var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var idadeDias = parseInt(input);

var anos = Math.floor(idadeDias / 365);
idadeDias %= 365;

var meses = Math.floor(idadeDias / 30);
idadeDias %= 30;

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(idadeDias + " dia(s)");
