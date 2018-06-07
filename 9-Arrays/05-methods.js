// Arrays 
//arrays use square brackets []

let x =[];

console.log(typeof x);

let student = ['Tyler', 'Sasan' , 'Brandon' , 'Lawrence' , 'Rajni', 'Sherri' , 'David'];

console.log(student[5]);

let cohort = ['Lawerance', 35, true, ['Brandon', 4, 'Sherri'], 6, false];

console.log ('Hello' , cohort[3][2], 'you look nice today.')

//Populating/Referring

let food = ['Hamburger', 'Chicken', 'Steak', 'Burrito', 'BBQ'];

food.push('Pizza');
food.splice(2,1,'Hamburger Helper'); //.splice(position, how many to delete, what to add in that location)
food.splice(3,0,'Pecan Pie');
food.pop();                         //pop will only remove the last item of the array and nothing else. 

for (f in food) {
    // console.log(f);
    console.log(food[f]);
}

//Iterating
//.forEach funcion is used with arrays

let food = ['Hamburger', 'Chicken', 'Steak', 'Burrito', 'BBQ'];
//food.forEach(f => console.log(f));
// food.forEach(f => console.log(`${f} is on the menu today`));
food.forEach((value, number) => {console.log(value);})

let movies = ['Star Wars', 'Empire Strikes Back', 'Return of the Jedi', 'Phantom Menace', 'Attach of the Clones', 'Revenge of the Sith'];
movies.push('The Force Awakens');
movies.splice(0,1,"Star Wars, A New Hope");
movies.forEach((value) => { console.log(value); });

