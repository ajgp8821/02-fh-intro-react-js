// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// /import heroes, {owners} from '../data/heroes';
// import {heroes, owners} from './data/heroes';
// imp -> shortcut

import heroes from '../data/heroes';

// const getHeroById = (id) => {
//     return heroes.find( ( hero ) => {
//         if ( hero.id === id ){
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
// }

// const getHeroById = (id) => {
//     return heroes.find( (hero) => hero.id === id );
// }

const getHeroById = (id) => heroes.find( (hero) => hero.id === id );

// console.log(getHeroById(2));


const getHeroByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner );
// console.log(getHeroByOwner('Marvel'));
// console.log(getHeroByOwner('DC'));
// console.log(owners);

export {
    getHeroById,
    getHeroByOwner
}
