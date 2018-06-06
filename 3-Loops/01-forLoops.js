// For Loops

for(var i = 0; i < 10; i++) {
    console.log(i);
}
 
// Challenge: using a for loop, count to 20, by 2's

for (I = 0; I <= 20; I += 2 ) {
    console.log(I);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1's

for(i = 10; i >= 0; i --) {
    console.log(i)
}

//Challenge: using a for loop, count from 0, going down by 2's to -24


for(i = 0; i >= -24; i -= 2) {
    console.log(i);
}

//Challenge: using a for loop, go through a name and display each letter individually

let name = 'Sherri';

for (i = 0; i < name.length; i ++) {
    console.log (name [i]);
}

//Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let total = 0

for (n = 1; n < 51; n++ ) {
    total += n;
 }

console.log (total)

