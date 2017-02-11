const zoelib = require('./helloword')

const greetMessage = zoelib.greet('Good Evening', 'Zoe');
console.log(greetMessage.toUpperCase());



console.log(zoelib.upper(greetMessage));
console.log(greetMessage);


