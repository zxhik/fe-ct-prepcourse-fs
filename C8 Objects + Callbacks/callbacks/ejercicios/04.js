function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var suma = 0;
   for (var i = 0; i < arrayOfNumbers[i]; i++){
      suma = suma + arrayOfNumbers[i];
   }
   cb(suma);
}

module.exports = sumarArray;
