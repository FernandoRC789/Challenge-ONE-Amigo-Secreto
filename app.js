// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Inicia declarando una variable de tipo array, 
que almacenará los nombres de los amigos ingresados.*/

let amigosList = [];
let contador = 1;

/*Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto 
y añadirlo a la lista de amigos creada anteriormente.*/
function agregarAmigo() {
    let amigoRegistrado = document.getElementById("amigo").value.trim();  
 // Verificar si el campo no está vacío
    if (contador != 1) {
        if ( amigoRegistrado != '') {
            amigosList.push(amigoRegistrado);  // Agregar el amigo al array
        
            // Actualizar el contador
            console.log('Contador:', contador);
            console.log('Lista de amigos:', amigosList);
        
            // Actualizar la cantidad de elementos en la lista
            console.log('Cantidad de elementos:', amigosList.length);
        
            // Mostrar la lista de amigos en la página
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
 
    /*amigoRegistrado.innerHTML = 
    //document.getElementById("listaAmigos").innerText(amigoRegistrado);
    console.log(amigoRegistrado);
    amigosList.push(amigoRegistrado);
    ///if (amigoRegistrado === '3') {
    //}else{
        //alert("Por favor, inserte un nombre.");
    //}
    console.log(contador);
    console.log(amigosList);
    console.log('la cantidad de elementos es '  + amigosList.length);

    contador ++;*/
}


function actualizarListaDeAmigos() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = '';  // Limpiar la lista previa

    // Recorrer la lista de amigos y mostrar cada uno
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