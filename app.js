/*Declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.*/

let amigosList = [];
let contador = 1;

/*Función que permita al usuario ingresar un nombre en el campo de texto 
y añadirlo a la lista de amigos creada anteriormente.*/
function agregarAmigo() {
    let amigoRegistrado = document.getElementById("amigo").value.trim();  
 // Verificar si el campo no está vacío la primera vez 
    if (contador != 1) {
        if ( amigoRegistrado != '') { //Verificar si el campo no está vacío
            amigosList.push(amigoRegistrado);  // Agregar el amigo al array
        
            // Mostrar la lista de amigos en la página es una función
            actualizarListaDeAmigos();
        
            // Limpiar el campo de texto
            document.getElementById("amigo").value = '';
        
            // Incrementar el contador
            contador++;
        } else {
            alert("Por favor, ingresa un nombre.");
        }
    }else{
        contador++;
    }
}


function actualizarListaDeAmigos() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = '';  //Limpiar la lista previa

    //Recorrer la lista de amigos y mostrar cada uno con for each
    amigosList.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo(){
    
}
agregarAmigo();
sortearAmigo();