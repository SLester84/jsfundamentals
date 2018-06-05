// Ternaries

var x = 6;

if (x > 0){
   console.log('yes') ;
  } else if(x >9){
        console.log ('maybe');
 }else{
     console.log('no');
 }

 console.log((x > 0) ? 'yes' : (x>9) ? 'maybe':  'no');

 (x > 0) ? console.log('yes') : console.log('no');

 var age = 30;

 console.log((age >= 25) ? 'Yay! You can rent a car!' : (age >= 21) ? 'Yay! You can drink' : (age >= 18) ? 'Yay! You can vote' : 'Sorry, you are too young to do anything');

