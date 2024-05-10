let notaPrimer= parseInt(prompt("Ingrese la nota del primer timpestre")); 
let notaSegundo= parseInt(prompt("Ingresar la nota del sengundo trimestre"));
let notaTercero= parseInt(prompt("Ingresar la nota del tercer trimestre")); 

let promedio= (notaPrimer+ notaSegundo+ notaTercero) / 3

if (isNaN(notaPrimer) || (notaSegundo) || (notaTercero)){
    console.log ("Ingrese un valor distinto a vacio e iguales a numeros 1-10")
}
 else if (notaPrimer<1 && notaPrimer>10 ){
    console.log ( "ingresar un valor del 1-10")
}else if( notaSegundo<1 && notaSegundo>10) {
    console.log ( "ingresar un valor del 1-10")
} else if(notaTercero<1 && notaTercero>10) {
    console.log ( "ingresar un valor del 1-10")
} else if (promedio>=1 && promedio<=3){
    console.log ("NOTA INSUFICIENTE")
} else if ( promedio>3 && promedio<=5){
    console.log("NOTA REGULAR")
} else if(promedio>5 && promedio<=7){
    console.log ("NOTA BUENA")
}  else if(promedio>7 && promedio<=9){
    console.log ("NOTA MUY BUENA")
} else if (promedio===10) {
    console.log("NOTA SOBRESALIENTE")
}

