// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num1 = Number(prompt("Escribe el primer numero"));
const num2 = Number(prompt("Escribe el segundo numero"));
const num3 = Number(prompt("Escribe el tercer numero"));

if (num1 > num2 && num1 > num3) {
  document.writeln("El mayor de los tres es: " + num1);
} else if (num2 > num1 && num2 > num3) {
  document.writeln("El mayor de los tres es: " + num2);
} else if (num3 > num1 && num3 > num2) {
  document.writeln("El mayor de los tres es: " + num3);
}
