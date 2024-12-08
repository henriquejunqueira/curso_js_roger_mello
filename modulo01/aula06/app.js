// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man'];

// heroes[2] = 'Spider-Man'; // substitui o item do index 2, ou seja, troca 'Iron Man' por 'Spider-Man'

// const ages = [31, 25, 39, 40];
const ages = [31, 25, 39, 40, 25];
const randomArray = ['Parker', 'Diana', 19, 18];

// console.log(heroes); // exibe todos os itens do array
// console.log(heroes[0]); // exibe o primeiro item do array
// console.log(heroes[3 - 2]); // exibe o segundo item do array porque 3 - 2 = 1 que é a posição do segundo item
//console.log(ages[2]); // exibe o item três do array que contém o índice 2, ou seja, 39
// console.log(randomArray); // exibe todos os itens do array

// Métodos de arrays
// console.log(heroes.length); // retorna a quantidade de itens do array

// const joinHeroes = heroes.join();
//const joinHeroes = heroes.join('|'); // define o separador dos itens como '|'
const joinHeroes = heroes.join('-'); // define o separador dos itens como '-'
//const indexOf25 = ages.indexOf(25); // retorna a primeira ocorrência do 25 no array ages
const indexOf25 = ages.indexOf('25'); // retorna -1 pois não existe a string '25' no array
const moreHeroes = heroes.concat('Superman', 'Wolverine'); // concatena dois arrays
const pushToHeroes = heroes.push('Cyclops', 'Hulk'); // adiciona itens ao final do array e retorna o número de itens
const popHeroes = heroes.pop(); // remove o último item do array e retorna ele

// console.log(joinHeroes);
// console.log(indexOf25);
// console.log(moreHeroes);
// console.log(pushToHeroes); // retorna 5 que é o número de itens agora no array
console.log(heroes);
// console.log(popHeroes);
