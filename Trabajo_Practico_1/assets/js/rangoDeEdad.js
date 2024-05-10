let edad= parseInt(prompt("ingrese su edad: "))
console.log(edad)

if( edad<=12) {
    console.log('Niño')
} else if ( edad=13 && edad<= 19){
    console.log ('Adulto')
} else if ( edad=20 && edad<=59) {
    console.log ('Adulto ')
} else if (edad>=60) {
    console.log( 'Adulto Mayor')
}