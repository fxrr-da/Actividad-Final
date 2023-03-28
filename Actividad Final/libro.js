/* La tabla de multas de la biblioteca es la siguiente:
• Tiempo de retraso 1 a 3 días hábiles = $1.500 por cada día de
retraso
• Tiempo de retraso 4 a 5 días hábiles = $2.500 por cada día de
retraso
• Tiempo de retraso 6 días o más = $3.500 por cada día de retraso
Genere un algoritmo en el cual se pueda ingresar la cantidad de días de
retraso e imprima cuantos días de retraso fueron y la cantidad en dinero que
deberá pagar. 

(Este algoritmo se desarrolla con el condicional if) */

let diasRetraso = prompt("Ingrese la cantidad de días de retraso:");
diasRetraso = parseInt(diasRetraso);

let montoMultas = 0;

if (diasRetraso >= 1 && diasRetraso <= 3) {
  montoMultas = diasRetraso * 1500;
} else if (diasRetraso >= 4 && diasRetraso <= 5) {
  montoMultas = diasRetraso * 2500;
} else if (diasRetraso >= 6) {
  montoMultas = diasRetraso * 3500;
}
console.log(`Días de retraso: ${diasRetraso}`);
console.log(`Monto de la multa: $${montoMultas}`);