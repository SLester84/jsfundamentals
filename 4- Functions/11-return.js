//Return

function capitalizeName(name){
    let capName = '';
    for (let l in name) {
        if (l==0){
            capName += name[l].toUpperCase();
        }else {
            capName += name[l].toLowerCase();
        }
    }
    //console.log(capName);
    return capName;
}

const newName = capitalizeName('sheRri');

console.log(newName + ', how are you today?');

