
// Arreglos en JS
const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// let arreglo2 = arreglo;
// let arreglo2 = [ arreglo, 5 ];
let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

let arreglo3 = arreglo2.map( function(num){
    return num * 2;
});

let arreglo4 = arreglo2.map( e => {
    return e * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);
