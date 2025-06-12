// 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo: 
//input: 15 , 3
//Output: El 15 es el número más grande

const num1 = prompt('Ingrese numero 1');
const num2 = prompt('Ingrese numero 2');

if (num1 > num2){
    document.writeln('El mayor es el ' +num1);
}else{
    document.writeln('El mayor es el ' +num2);
}
