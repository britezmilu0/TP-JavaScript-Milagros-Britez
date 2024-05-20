let nroArticulo= parseInt( prompt("Ingresar el la cantidad de articulos iguales"))
let precioUnitario= parseInt(prompt("Ingresar el precio unitario del articulo"))
let precioTotal= nroArticulo*precioUnitario 


switch (true) {
    case isNaN(nroArticulo) || (precioUnitario):
        console.log('Error ingresar un número mayor a 1');
        break;
    case (nroArticulo<1) && (precioUnitario<1):
        console.log("Verificar que se a ingresado un caracter mayor a 1");
        break;
    case nroArticulo>10 && precioTotal>20000:
        let porcentaje= precioTotal * 0.15
        console.log('Este es el precio con 15% de descuento '+ porcentaje);
        break;
    case (nroArticulo<10) || (precioUnitario<20000):
        console.log ('el precio total es '+ precioTotal )

    default:
        console.log ('ERROR')
        break; 
}