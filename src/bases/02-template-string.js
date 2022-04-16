
const name = 'John';
const lastName = 'Wick';

// const nameCompete = name + ' ' + lastName;
const nameCompete = `${name} ${lastName}`;

console.log(nameCompete);

function getSaludo(name) {
    return 'Hello ' + name;
}

console.log(`Este es un texto: ${ getSaludo(nameCompete) }`);
