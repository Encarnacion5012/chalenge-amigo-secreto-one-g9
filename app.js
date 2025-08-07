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