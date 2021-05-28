// for( let num=1; num<101; num++) {

//     if (num % 2 ==0){
//         console.log(num)
//     }
// }

// let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];


// let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

// function multiplosDeTres(array){ 
//     let numerosSeleccionados= [];
//     let numerosOrdenados= [];
//     for(let i=0; i<array.length; i++) {


//         if (array[i] % 3 ==0){
//             numerosSeleccionados.push(array[i]);
            
//             // console.log(array[i]);
//         }
//     }
//     numerosOrdenados= numerosSeleccionados.sort((a, b)=>{return a-b});
//     return numerosOrdenados;
// }

// let arrayFinal= multiplosDeTres(numeros);
// console.log(arrayFinal);

// multiplosDeTres(numeros);
// console.log("aqui va el segundo array")
// let num = [45, 2, 35, 12];

// multiplosDeTres(num)


let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

for (let i=0; i<numeros.length; i++) {

    if (numeros[i] % 3 ==0){

        console.log(numeros[i]);
    }
}