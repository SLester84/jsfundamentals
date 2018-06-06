//Fat Arrow Functions

// Standard 
function laptop(){
    console.log("Sasan\'s laptop is about to explode");
}
laptop();

//Fat Arrow  (do not get hoisted)

 let laptop = () => {
    console.log("Sasan\'s laptop is about to explode");
}
laptop();

//with parameters

var cats = (fleas, ticks) => {
    console.log ("Cats have " + fleas + " and " + ticks);
}
cats ('fleas', 'ticks');


//concise bodies

let apples = x => console.log(`There are ${x} apples.`);

apples(20);

//block bodies

let apples = (x) => {console.log(`There are ${x} apples.`);}

apples(7);

//line breaks are bad

let func = () => console.log ('hi'); //ok

let func = ()
    => console.log('hi'); //not ok

    
