// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres =[];

function agregarAmigo() {
    if ( document.getElementById("amigo").value == '')
        {
            alert("Por favor introdusca un nombre");
            document.getElementById("amigo").value='';
        }
        else{
            nombres.push=document.getElementById("amigo").value;
            document.getElementById("amigo").value ='';
            }           
    
}


function actualizarListaAmigos() {
    
    let  lista = document.getElementById("listaAmigos"); //esta es la lista que esta dentro del html

    for (let i = 0; i < nombres.length; i++) {
      //nombres[i] es el nombre de acuerdo a la posicion del arreglo donde se almacenan los amigos

        let li =document.createElement("li"); //Crear elemento li para la lista ul en el html
        
        li.textContent = nombres[i]; //texto que tendra el elemntoo li

        lista.appendChild(li); //haciendo a li hijo de la lista del html
    }
}