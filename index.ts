import { Likes } from "./src/likes";

let numberOfLikes = new Likes(["Alex", "Jacob", "Mark", "Max", "Roger", "André", "Robson", "Lázara", "Marcus", "Luiz"]);
console.log(numberOfLikes.getLikes());

/*import readline = require('readline');

let userInput = readline.createInterface({input: process.stdin, output: process.stdout});

userInput.question("Please, enter an integer number: ", 
function(answer)
{
    let integerNumber = new SumOfDigits(answer);
    let digitalRootSum = integerNumber.digitalRoot();
    console.log(`The digital root sum is: ${digitalRootSum}`);
});*/