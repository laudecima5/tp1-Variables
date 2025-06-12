// 8.- Escribe un programa que pida un número y diga si es divisible por 2

const numero = prompt("ingrese un numero")

if(numero % 2 === 0){
    document.writeln('El numero '+numero+' es divisible')
}else{
    document.writeln('El numero '+numero+' no es divisible')
}