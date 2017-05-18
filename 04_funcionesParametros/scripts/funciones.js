//var nNum1=prompt("Dime un número");
//var nNum2=prompt("Dime otro");


//Declaracion de una funcion, tiene 2 partes los valores que le damos y las operaciones
//function sumar(){

//}




function saludar(){
    let sSaludo="Hola";
    console.log(sSaludo);
    
}

function sumar(a,b){
    return Number(a)+Number(b);
}


function sumarArg(){

let nResult=0;

    for (var i = 0; i < arguments.length; i++) {
        nResult += arguments[i];
        
    }

    return nResult;
}


function media(){

   
}


function main(){
    
    let nNum1=prompt("Dime un número");
    let nNum2=prompt("Dime otro");
    
    console.log(sumar(nNum1,nNum2)+" Suma");
    console.log(media(2,2,4,5,7,5,8,67))
   

    saludar();
}



//Invocación de la funcion

main();



