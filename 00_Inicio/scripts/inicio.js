
// comentario de una linea: Esto es una variable

/* comentario para más lineas*/


// Constantes
const SALUDO ="Hola "


//Variables

//Operadores





//Acceso al nodo btn1 del DOM

var oBtn1 = document.querySelector("#btn1");

//Acceso al Node nombre del DOM

var oNombre = document.querySelector("#nombre");

//Acceso al Node respuesta del DOM

var oRespuesta = document.querySelector("#respuesta");


//Funciones

function saludar () {

                     let sSaludo = SALUDO

                     sSaludo += oNombre.value;

                     oRespuesta.innerHTML ="<b>"+ sSaludo +"</b>";

                    }




oBtn1.onclick = saludar;


console.dir(oBtn1);
console.dir(oNombre);
console.dir(oRespuesta);




