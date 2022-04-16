
// Desestructuración de Arreglos
// Asignación Desestructurante

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p2 ] = personajes;
console.log(p2);

const returnArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnArray();

console.log(letras, numeros);





const usesState = ( value ) => {
    return [value, () => { console.log('Hello World');}]
}

const [name, setsName] = usesState('Goku');
console.log(name);
setsName();
// arr[1]();
