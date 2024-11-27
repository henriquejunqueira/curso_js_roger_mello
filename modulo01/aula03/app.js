// métodos comuns de strings
const email = 'laracroft@rogermelo.com.br';

// ? lastIndexOf()
// obtém a última ocorrência do caracter passado por argumento
// const lastIndexOfA = email.lastIndexOf('a');
// console.log(lastIndexOfA);

// ? slice()
// * corta a string entre a posição 0 e 9, sendo que 9 não é exibido
// const emailSlice = email.slice(0, 9); // exibe 'laracroft'

// * corta a string entre a posição 0 e 4, sendo que 4 não é exibido
// const emailSlice = email.slice(0, 4); // exibe 'lara'

// * corta a string entre a posição 4 e 9, sendo que 9 não é exibido
//const emailSlice = email.slice(4, 9); // exibe 'croft'
// console.log(emailSlice);

// ? replace()
// * Substitui a primeira ocorrência do caracter 'l' por 'y' na string
// const emailReplace = email.replace('l', 'y');

// * Substitui 'laracroft' por 'chun-li' na string
const emailReplace = email.replace('laracroft', 'chun-li');

console.log(emailReplace);
