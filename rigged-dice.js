const prompt = require(`prompt-sync`)({signt: true});

let userNumber = Number(prompt(`What is your favorite number? `));
let roll = Math.ceil(Math.random()*7);

console.log(`*Rolls Dice*`);
console.log(`Actual roll: ${roll}`);

if(roll === 7){
    console.log(userNumber);
}else{
    console.log(roll);
}