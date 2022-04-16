
const person = {
    name: 'John',
    lastName: 'Wick',
    age: 50,
    address: {
        city: 'New York',
        zipCode: 13254,
        lat: 14.2154,
        lng: 584.1565,
    }
}

// console.table({person});

const person2 = {...person};
person2.name = 'Peter'

console.log({person});
console.log({person2});
