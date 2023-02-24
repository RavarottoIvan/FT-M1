'use strict';

function BinarioADecimal(num) {
   var cadena = num.split('');
   var a = 0, exponente = 0;
   for (var i = (cadena.length - 1) ; i >= 0 ; i--){
      a += cadena[i]* Math.pow(2, exponente);
      exponente++;
   }
   return a;
}

function DecimalABinario(num) {
   var binario = num.toString(2);
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
