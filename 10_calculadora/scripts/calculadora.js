

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
    let pQue=prompt("escriba operador");
    let result;


    if (pQue=="s" || "S") { //s mayuscula o miniscula
        sumar();
        return result;
        
        }
        
        if (pQue=="r"|| "R") {//r mayuscula o miniscula
            restar() 
    }
                
                if (pQue=="m") {
                    multi();
    }
                         
                         if (pQue=="d") {
                            divi();
                    }

                   alert (result);

}





    
    //console.log(sumar(nNum1,nNum2)+" Suma");
    //console.log(restar(nNum1,nNum2)+ " Resta");
    //console.log(multi(nNum1,nNum2)+" Multiplicación");
    //console.log(divi(nNum1,nNum2)+ " Dividir");
    //console.log(operador(pQue));
    //saludar();





//Invocación de la funcion

main();

