function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var potencia = 0;
  var i = 0;
  while(numero >= potencia){
    if (potencia == numero){
      return true;
    }
    i = i +1;
    potencia = Math.pow(2,i);
  }
  return false;
}

module.exports = esPotenciaDeDos;
