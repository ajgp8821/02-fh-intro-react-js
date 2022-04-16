
// Funciones en JS
function saludar( name ){
    return `Hello, ${name}`;
}

const saludar1 = function(name){
    return `Hello, ${name}`;
}

const saludar2 = (name) => {
    return `Hello, ${name}`;
}
const saludar3 = (name) =>`Hello, ${name}`;
const saludar4 = () =>`Hello World`;

// saludar = 30;
// console.log(saludar);

console.log(saludar('John'));
console.log(saludar1('John'));
console.log(saludar2('John'));
console.log(saludar3('John'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'usuario'
    }
}

const getUser2 = () => (
    {
        uid: 'ABC123',
        username: 'usuario'
    }
)

const user = getUser();

console.log(user);
console.log(getUser());
console.log(getUser2());


const getActiveUser = (name) => ({
    uid: '123ABC',
    username: name
});

const activeUser = getActiveUser('John');
console.log(activeUser);
