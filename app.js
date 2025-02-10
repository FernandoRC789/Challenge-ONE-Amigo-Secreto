/*Declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.*/
let amigosList = [];

/*Función que permita al usuario ingresar un nombre en el campo de texto 
y añadirlo a la lista de amigos creada anteriormente.*/
function agregarAmigo() {
    let amigoRegistrado = document.getElementById("amigo").value.trim();  
 // Verificar si el campo no está vacío la primera vez 
    if ( amigoRegistrado != '') { //Verificar si el campo no está vacío
        if (/^[A-Za-zñÑ\s]+$/.test(amigoRegistrado)) {
            amigosList.push(amigoRegistrado);  // Agregar el amigo al array
        
            // Mostrar la lista de amigos en la página es una función
            actualizarListaDeAmigos();
    
            // Limpiar el campo de texto
            document.getElementById("amigo").value = '';
        }else{
            alert('Ingrese solo Texto');
            document.getElementById("amigo").value = '';
        }
    } else {
        alert("Por favor, ingresa un nombre.");
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

//Función para obtener un número aleatorio
function numeroAleatorio(){
    let numeroSecreto = Math.floor(Math.random() * amigosList.length);
    return numeroSecreto;
}



function sortearAmigo(){
    let numeroSecreto = numeroAleatorio();

    if ( amigosList.length !== 0) { //Verificar si el campo no está vacío
        for (let i = 0; i < amigosList.length; i++) {
            if (i === numeroSecreto ) {
                let resultado = document.getElementById('resultado');
                resultado.innerHTML = `El amigo secreto sorteado es: ${amigosList[i]}`;
                limpiarCampos('listaAmigos');
            }
        }
    } else {
        alert("No hay Nombres para Sortear");
    }
}

//limpiar campos con el id como parametro de la función
function limpiarCampos(texto){
    let textoEliminar = document.getElementById(texto);
    textoEliminar.innerHTML = '';
}