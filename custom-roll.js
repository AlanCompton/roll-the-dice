const prompt = require('prompt-sync')();

let x = Number(prompt(`How many sides for the dice? `));

x = Math.ceil(Math.random() * x);

console.log(x);