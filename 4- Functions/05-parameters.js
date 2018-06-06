//Parameters

//parameters go inside the parens of a function and when you call the function

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}
pet('cat');

/*
Challenge:
write a function that takes two parameters:
One parameter is for a first name,
the other parameter is for a last name;
have them come together in a variable inside the function.
console.log 'Hello, my name is Sherri Lester'
call your function
*/

function fullName(first, last) {
    let Name = first + ' ' + last;
    console.log(`Hello, my name is ${Name}!`);
}
fullName("Sherri", "Lester");



