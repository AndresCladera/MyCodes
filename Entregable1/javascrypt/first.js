let edadfs = 57;
let edadyo = 29;

if (edadfs < edadyo){
    console.log("Soy mayor que Feernando Simón.");
}
else if (edadfs > edadyo){
    console.log("Soy menor que Fernando Simón");
}




let parImpar = function(num){
    let numero = num;
    if(numero % 2 == 0){
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

console.log(parImpar(7));



let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

for (i=0; i<6; i++){
    console.log(i)
}

// esto es un comentario cmd shft /