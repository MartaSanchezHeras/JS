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

function restar(a,b){
    return (a)-(b);
}

function multi(a,b){
    return (a)*(b);
}

function divi(a,b){
    return (a)%(b);
}

function main(){
    
    let nNum1=prompt("Dime un número");
    let nNum2=prompt("Dime otro");
    
    console.log(sumar(nNum1,nNum2)+" Suma");
    console.log(restar(nNum1,nNum2)+ " Resta");
    console.log(multi(nNum1,nNum2)+" Multiplicación");
    console.log(divi(nNum1,nNum2)+ " Dividir");
    saludar();
}



//Invocación de la funcion

main();



