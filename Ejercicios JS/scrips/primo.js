
var arPrim = new Array(1,2,3); 

function primos(numero){ 
    for(j=3;j<=numero;j+=2){ 
        primo = true; 
        for(k=2;k<arPrim.length;k++){ 
            if(j%arPrim[k]==0){ 
                primo = false; 
                break; 
            } 
        } 
        if (primo == true){ 
            arPrim.push(j); 
        } 
    } 
    return arPrim.join(); 
} 



console.log(primos(100));