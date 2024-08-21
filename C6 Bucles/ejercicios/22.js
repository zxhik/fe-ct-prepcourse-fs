function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var i = 0;
  var sumas = num;
  do {
    sumas = sumas + 5;
    i += 1;
  }while (i < 8);

  return sumas;
}

module.exports = doWhile;