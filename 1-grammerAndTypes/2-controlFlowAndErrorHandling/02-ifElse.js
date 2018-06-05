//If Else

var money = true;

if (money) {
    console.log('STARBUCKS')
} else {
    console.log('Robin\'s coffee is fine')
}

var money = false;

if (money) {
    console.log('STARBUCKS')
} else {
    console.log("Robin's coffee is fine")
}

var name = true;

if (name){
    console.log('Hello, my name is Sherri');
} else{
    console.log('Hello, what is your mame?')
}

var name = false;

if (name){
    console.log('Hello, my name is Sherri');
} else{
    console.log('Hello, what is your mame?')
}

var name = 'Sherri Lester';

if (name == 'Sherri Lester') {
    console.log('Hello, my name is' , name);
} else{
    console.log('Hello, what is your name?')
}

var name = 'sherrI'

if (name == 'sherrI') {
   console.log('My name is Sherri')
} else{
    console.log('i don\'t know how to do this')
}

var name = 'sherri';

if (typeof name === 'string') {
if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log('Hello my name is' , firstLetter);
} else {
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('Hello my name is' , otherLetters)
}
}

//else if

var type = true;

if (typeof type === 'string'){
    console.log(typeof type)
 } else if (typeof type === 'boolean') {
     console.log (typeof type)
 } else {
     console.log('Something else');
 }

 var age = 30

 if (age >= 25) {
    console.log('Yay! You can rent a car!');
 } else if ( age >= 21) {
    console.log ('Yay! You can drink!');
 } else if (age >= 18) {
     console.log ('Yay! You can vote')
 } else if (age <=17) {
     console.log ('You can not do anything');
 }

 