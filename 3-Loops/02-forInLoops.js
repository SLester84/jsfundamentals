// For In Loops

var student = {
    name: 'Sason',
    awesome: true,
    cohort: 'JavaScript',
    week: 1
}

for (let item in student) {
    console.log (item);
    console.log (student [item]);
}

// Challenge: Write a for in Loop that capitalizes the first letter of a student's name

let studentName = 'shErri';
//let capName;
for (var letter in studentName) {
  if (letter == 0) {
        capName = studentName[letter].toUpperCase();
    } else {
        capName += studentName[letter].toLowerCase();
    }
 }

 console.log (capName);
