//Return

function capitalizeName(name){
    let capName = '';
    for (let L in name) {
        if (L == 0){
            capName += name[L].toUpperCase();
        }else {
            capName += name[L].toLowerCase();
        }
    }
    //console.log(capName);
    return capName;
}

const newName = capitalizeName('sheRri');

console.log(newName + ', how are you today?');

/* 
Challenge: 
Make a tip calculator using a function
have it RETURN the value
Capture that returned value in a VARIABLE
Print that variable
*/

var calculateTotalWithTip = function (totalWithoutTip, tipPercentage) {
    let totalWithTip;
    function calculateTip(totalWithoutTip, tipPercentage) {
        let tipAmount = totalWithoutTip * tipPercentage;
        return tipAmount;
    }
    totalWithTip = calculateTip(totalWithoutTip, tipPercentage) + totalWithoutTip;
    return totalWithTip;
}
​var tipAmount = calculateTotalWithTip(100, .20);
console.log(tipAmount);

function tipAmount(orderTotal, tipPerc) {
    let netTotal = orderTotal * tipPerc;
    return netTotal.toFixed(2);
}
let tip= tipAmount(19.97, .20)
console.log (tip);

