let par=0;
let impar=0;
let aux=0;
let num1= parseInt(prompt("Ingrese un primer numero:"));
let num2= parseInt(prompt("Ingrese un segundo numero:"));
if (num1==num2) {
    document.write ("No hay intervalo posible.")
}
else {
    if (num1>num2) {
        aux=num1;
        num1=num2;
        num2=aux;
    }
    for (i=(num1+1); i<num2; i++) {
        document.write (i+" ")
        if (i%2 === 0) {
            par=par++
        }
        else {
            impar=impar++
        }
    }
}
document.write ("hay "+par+" cantidad de pares")
document.write ("hay "+impar+" cantidad de impares")