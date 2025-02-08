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

//Función para obtener un número aleatorio
function numeroAleatorio(){
    let numeroRandom = Math.floor(Math.random() * 10);
    return numeroRandom;
}


function sortearAmigo(){
    let numeroSecreto = numeroAleatorio();
    console.log('el numero secreto es : ' + numeroSecreto);
    console.log("el numero random es " + numeroSecreto)
    
    if ( amigosList.length !== 0) { //Verificar si el campo no está vacío
        alert("la lista esta completa");
        contador++;
    } else {
        alert("la lista esta vacia");
    }

}


    /*if (amigosList.length != 0 && contador != 1) {
        for (let i = 0; i < amigosList.length; i++) {
            if (i === numeroSecreto) {
                console.log(i);
                console.log(amigosList[i] === numeroSecreto);
                console.log(amigosList[i]);
                console.log('el numero secreto if es:'+numeroSecreto)
                console.log("el amigo secreto es :" + amigosList[i])
                break;
            }else{
                console.log(amigosList[i] === numeroSecreto);
                console.log(amigosList[i]);
                console.log(i);
                console.log('else el numero secreto if es:'+numeroSecreto)
                console.log("else el amigo secreto es :" + amigosList[i])
                console.log("no se encontro ningun amigo secreto");
                alert("ingrese nombres a sortearrrrr");
            }
        }
    }else{
        alert("ingrese nombres a sortearrrrr if amigos ");
        //return;
        contador++;
    }*/


//numeroAleatorio();
//sortearAmigo();