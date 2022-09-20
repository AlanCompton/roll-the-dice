const prompt = require(`prompt-sync`)({signt: true});

let cN = Number(prompt(`How many sides would you like your dice to have? `));

console.log(Math.ceil(Math.random()*cN));