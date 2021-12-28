/* #2
const character = 'nobia';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

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

//arrays
let names = ['uri', 'mona', 'seenu'];
names.push('reena');
//names.push(2); is not possible
//names[0] = 3; is not possible
//name = 'juhi' is not possible cannot change array type.

let numbers = [11, 23, 45]
numbers.push(47);
//numbers.push('reku'); is not possible
//numbers[2] = 'ruune'; is not possible

let mixed = ['tunee', 2, true, 56, 'eelu'];
mixed.push('teena');
mixed.push(34);
mixed.push(false);

//objects
let ninja = {
    name: 'mari',
    belt: 'blue',
    age: 20
};

ninja.age = 29;
ninja.name = 'ryu';
//ninja.age = 'ryu'; is not possible
//ninja.skills = ['fight', 'boxing']; is not possible
ninja = {
    name: 'nnari',
    belt: 'black',
    age: 24
};


/*  is not possible
ninja = {           
    name: 'ari',     
    belt: 'black',
    //age: 89  all must be there name,belt,age.
}; 
ninja = {           
    name: 'ari',     
    belt: 'black',
    age: 89  
    skills: ['fight', 'skill'] nothing can be added other than name,belt,age.
}; */
