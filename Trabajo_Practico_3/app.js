let tareas= []
//ingresar
let opcion = null


function eliminar(){
    let nombreTarea = prompt("Ingrese el nombre que desea eliminar")
    let posicion= tareas.indexOf(nombreTarea) 
    tareas.splice(posicion, 1)
}
function agregar(){
    let nombreTarea= prompt("ingrese el nombre de la tarea que quiere agregar")
    if (nombreTarea.trim() === ""){
    alert("tiene espacio")
} else{
    tareas.push(nombreTarea)
    console.log(tareas);
}
}
function listarTareas(){
    alert("mis tarea\n"+ tareas)
}
function editarTarea(){
    let nombreTarea= prompt("Ingrese el nombre que quiere editar")
    let posicion= tareas.indexOf(nombreTarea)
    let nombreNuevo= prompt("ingrese el nuevo nombre")
    tareas.splice(posicion, 1, nombreNuevo)

}   

while (opcion !== 0) {
        opcion = parseInt(prompt("ingrese la accion que quiere realizar \n1 eliminar \n2 agregar \n3 listar \n4 editar"))

        switch (opcion) {
            case 1:
                eliminar()
                break;
            case 2:
                agregar()
                break;
            case 3:
                listarTareas()
                break;
            case 4:
                editarTarea()
                break;
            default:

                break;
        }
    }