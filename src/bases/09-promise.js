import { getHeroById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//     console.log('Se ejecuta');
//     setTimeout(() => {
//         console.log('2 segundos despues');
//         // Importar 
//         const hero = getHeroById(2);
//         console.log(hero);
//         // resolve(hero);
//         reject('No se pudo encontrar al héroe')
//     }, 2000);
// })

// promesa.then( (hero) => {
//     console.log('Heroe', hero);
// })
// .catch( err => console.warn(err))
// .finally()

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {
        console.log('Se ejecuta');
        setTimeout(() => {
            console.log('1 segundo despues');
            // Importar 
            const hero = getHeroById(id);
            // console.log(hero);
            if (hero) {
                resolve(hero);
            }
            else {
                reject('No se pudo encontrar al héroe')
            }
        }, 1000);
    });
}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn)
    // .then(hero => console.log('Hero', hero) )
    // .catch(err => console.warn(err))