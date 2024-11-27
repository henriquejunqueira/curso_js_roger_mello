// strings
console.log('hello, world');

const email = 'teste@teste.com';

console.log(email);

// concatenação de strings
const firstName = 'Nathan';
const lastName = 'Drake';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// acessando caracteres
//console.log(fullName[0]); // exibe 'N' no console
console.log(fullName[2]); // exibe 't' no console

// comprimento de uma string
console.log(fullName.length);

// métodos de string
console.log(fullName.toUpperCase()); // exibe a string toda em maiúsculo

const result = fullName.toLowerCase(); // exibe a string toda em minúsculo

console.log(result, fullName);

const index = email.indexOf('@'); // exibe a posição (índice) que o caracter especificado está na string

console.log(index);
