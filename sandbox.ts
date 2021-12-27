/* #2
const character = 'nobia';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})*/

let character = 'mario';
let age = 21;
let isBlackBelt =false;

// character = 20; is not possible
character = 'nikks';

//age ='yoshi'; is not possible
age = 29;

//isBlackBelt = 'yes'; is not possible
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(6.8));