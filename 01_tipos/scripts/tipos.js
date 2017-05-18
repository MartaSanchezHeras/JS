
// comentario de una linea: Esto es una variable

/* comentario para más lineas*/


// Constantes
const SALUDO ="Hola "

//Number
var nEdad=12;
//Variables

//Operadores + - ^ * / typeof


//string
var sCantaor="Pepe `El Lebrijano `"
var sCantaor2="Juan `El Habichuela`"

// Boolean
var sBueno= true;
var sMalo=false;

//Undefined
var queSoy;

//Null (object  undefined)
var oDatos={};

//Object

var oDatos={
    nombre:"Maria" ,
    apellido:"Castaño",
    edad:"26",
    nacionalidad:"Eslovena",
    esVaron:false,
    
    oDirecion:{
        calle:"",
        numero:"",
        poblacion:"",
        cp:"",
        pais:"",
    }
}



//Acceso al nodo btn1 del DOM

var oBtn1 = document.querySelector("#btn1");

//Acceso al Node nombre del DOM

var oNombre = document.querySelector("#nombre");

//Acceso al Node respuesta del DOM

var oRespuesta = document.querySelector("#respuesta");


//Funciones

console.info("Valores")
console.dir(typeof nEdad);
console.dir(typeof oDatos);
console.dir(typeof sCantaor);

oDatos.oDirecion.calle="calle santa susana";

console.info("Tipos")
console.dir(typeof nEdad);
console.dir(typeof oDatos);
console.dir(typeof sCantaor);
console.dir(typeof queSoy);
console.dir(typeof sMalo)


