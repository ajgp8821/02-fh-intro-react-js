
// Desestructuración
// Asignación Desestructurante

const person = {
    name: 'John',
    age: 50,
    pass: '123',
    range: 'Baba Yaga'
};

// const { name:nameP, age, pass } = person;

// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.pass);
// console.log(nameP);
// console.log(age);
// console.log(pass);

const usesContext = ( {name, age, pass, range = 'Boss'} ) => {
    // const { name:nameP, age, pass } = user;
    // console.log(age, name, pass, range);
    return {
        namePass: pass,
        years: age,
        latlng: {
            lat: 15.23554,
            lng: -58.32544
        }
    }
}

// returnPerson( person );
const {namePass, years, latlng: {lat, lng}} = usesContext(person);
console.log(namePass, years);
// console.log(latlng);
console.log(lat, lng);

