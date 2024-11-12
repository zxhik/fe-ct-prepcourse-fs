function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var sin5 = [];
  var n = num;
  var i = 1;
  while (i <= 10){
    i++;
    if (i != 5){
      num += 2;
      sin5.push(num);
      continue;
    }
  }
return sin5;
}

module.exports = continueStatement;
