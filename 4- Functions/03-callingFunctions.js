//Functions

//Declarations

var s; //hoisted
let m;
const r;

function hi(); //hoisted

//Expressions
var hi = function hello() {}; //not hoisted

// Calling Functions

function coffeeCup() {
    console.log ('I like coffee');
}

coffeeCup();  //when you call a function you don't need to console.log, the () tell it to call the function
                // good rule of thumb=always name your functions



let x = 10;
let y = 20;

function math(){
    console.log (x + y);
}
math();

