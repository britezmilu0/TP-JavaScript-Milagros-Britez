let num1 = prompt('Ingrese el primer numero entero:')
let num2 = prompt('Ingrese el segundo numero entero:')
let num3 = prompt('Ingrese el tercer numero entero:')

if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        alert('El orden ascendente de los números es: ' + num3 + ', ' + num2 + ', ' + num1)
    }
    else{
        alert('El orden ascendente de los números es: ' + num2 + ', ' + num3 + ', ' + num1)
    }
}
else if(num2 > num3){
    if(num1 > num3){
        alert('El orden ascendente de los números es: ' + num3 + ', ' + num1 + ', ' + num2)
    }
    else{
        alert('El orden ascendente de los números es: ' + num1 + ', ' + num3 + ', ' + num2)
    }
}
else{
    if(num1 > num2){
        alert('El orden ascendente de los números es: ' + num2 + ', ' + num1 + ', ' + num3)
    }
    else{
        alert('El orden ascendente de los números es: ' + num1 + ', ' + num2 + ', ' + num3)
    }
}