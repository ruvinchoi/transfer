import { name, lname, age } from './pearson.js';

let Hue = new Object();

Hue.fname = "Hue";
Hue.lname = "Man";
Hue.age = 10;
Hue.getFullName = function(){
    return Hue.fname + " " + Hue.lname;
}


// if (Hue.age <10){
//     console.log(Hue.fname);
// }else if (Hue.age < 20){
//     console.log(Hue.getFullName());
// }else{
//     console.log(Hue.age);
// }

let stuff = "hi ";
for (let x in Hue){
    stuff += Hue[x] + "\n";
}
console.log(stuff);
console.log(name);