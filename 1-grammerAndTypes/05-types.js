// Types

//booleans
//true or false - yes or no

var bool = true;
console.log(typeof bool);

var noBool = false;
console.log (typeof noBool);

//null
var empty = null;
console.log(typeof empty);

// undefined

let grass;
console.log(grass);

var undef = undefined;
console.log(typeof undef);

//numbers

var degrees = 90;
console.log(`it is currently ${degrees} degrees.`);

var precise = 999999999999999;
console.log(precise);

var rounded = 9999999999999999;
console.log(rounded);

var notQuite = 0.2 + 0.1;
console.log(notQuite);

//strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// numbers vs strings

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

let fName = 'Sherri';
let lName = 'Lester';
let hNumber = 9730;
let sName = 'Trial Dr';
let city = 'Avon,';
let state = 'IN';
let zip = 46123;

console.log(fName, lName);
console.log(hNumber + ' ' + sName);
console.log(city, state, zip);


//objects
//container that can hold multible datatypes
//objects are denoted by curly brackets {}

let burritoNow ={
    size: 'Large',
    quantity: 4,
    now: true
};
console.log(burritoNow);

//arrays
//great for making lists
//arrays use square brackets

 var burritos = ['large', 'med', 'small'];
 console.log(burritos);
 console.log(typeof burritos);






