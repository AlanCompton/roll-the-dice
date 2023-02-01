const prompt = require('prompt-sync')();

let x = Number(prompt(`Submit a number 1 - 6 : `));

let y = Math.ceil(Math.random()*6)

while(x < 1 || x > 6 || isNaN(x)){
    x = Number(prompt(`Submit a number 1 - 6 : `));
}

console.log(`Rolls...`);

if(y !== x){
    y = Math.ceil(Math.random()*6)
    console.log(y);
}else{
    console.log(y);
}