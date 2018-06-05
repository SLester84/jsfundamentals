//hoisting
//taking declarations and putting them at the top of the code and running line by line
//let is locked into block scoping and var is not so let will not hoist but var will
//hoisting doesn't really exist, java does not actually move the var to the top, it just reads the code twice, 1st time it looks for declared variables or functions then acts on them first
//anything local scoped does not get hoisted

let scissors;

scissors = 'blue';
console.log(scissors);

