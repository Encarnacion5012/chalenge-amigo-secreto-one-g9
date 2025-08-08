// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres =[];

function agregarAmigo() {
    if ( document.getElementById("amigo").value == '')
        {
            alert("Por favor introduzca un nombre");
            document.getElementById("amigo").value='';
        }
        else{
            nombres.push(document.getElementById("amigo").value);
            document.getElementById("amigo").value ='';
            actualizarListaAmigos();
            }           
   return; 
}


function actualizarListaAmigos() {

    console.log(nombres);
    cambiarTextoElemnto("listaAmigos","");
    for (let i = 0; i < nombres.length; i++) {
      //nombres[i] es el nombre de acuerdo a la posicion del arreglo donde se almacenan los amigos
        agregarElentos_li(nombres[i]);
    }
    return;
}


function sortearAmigo()  { //funcion para mostrar amigos secretos
    if (nombres.length === 0 ){
        alert("Aun no has agregado ningun amigo");
    }
    else{
        cambiarTextoElemnto("listaAmigos" ,`El amigo secreto es: ${nombres[generarNumero()]}`);
    }
    return;
}

function agregarElentos_li (nombre) {  //Agregar elementos li a la lista html fucion especifica
    const lista = document.getElementById("listaAmigos"); //esta es la lista que esta dentro del html
    let li =document.createElement('li'); //Crear elemento li para la lista ul en el html
    li.textContent = nombre; //texto que tendra el elemntoo li
    lista.appendChild(li); //haciendo a li hijo de la lista del html
    return;
}



function cambiarTextoElemnto(nombreElemto, texto) { //funcion para cambiar texto de elementos dentro del html
    const elemento = document.getElementById(nombreElemto); //se usa tambien para limpiar la lista
    elemento.innerHTML = texto;
    return;
}

function generarNumero() { //Generar numero para el sorteo de numeros
      return Math.floor(Math.random() * nombres.length);
}

console.log(generarNumero());