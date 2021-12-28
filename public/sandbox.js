"use strict";
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

#4

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
};

#5

//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'leena'; is not possible
age = 20;
//isLoggedIn = 25; is not possible
isLoggedIn = true; //or false

// arrays
//let ninjas: string[]; // but to push elements this must be declared as below
let ninjas: string[] = [];
//ninjas.push(67); is not possible
ninjas.push('any-string');

//union types
//for mixed array
let mixed: (string|number|boolean)[] = [];
mixed.push('hie');
mixed.push(78);
mixed.push(false);
console.log(mixed);

//for mixed variable
let uid: string|number;
uid = '123';
uid = 123;
//uid = true; is not possible

//objects
let ninjaOne: object;
ninjaOne = { name:'nids', age:21 };
//ninjaOne = 'heeru'; is not possible

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

//ninjaTwo = {} is not possible
ninjaTwo = {
    name: 'deepa',
    age: 32,
    beltColor: 'green'
}  // cannot add or remove any key value pair from the object initialized

#6

// dynamic (any) type
let age: any = 23;

age = true;
console.log(age);
age = 'hieeee';
console.log(age);
age = {name: 'herokee'};
console.log(age);

let mixed: any[] = [];

mixed.push(3);
mixed.push('byeee');
mixed.push(false);
console.log(mixed);

let ninja: {name: any, age: any };

ninja = { name:'neeha' , age:23 };
console.log(ninja);

ninja = { name:23 , age:'neeha' };
console.log(ninja);

#7
console.log('test');

#8

/*type 1
let greet = () => {
    console.log('hello, world');   //or
}
//greet = 'hello'; is not possible

//type 2
let greet: Function;
greet = () => {
    console.log('hello, world');   //or
}

const add = ( a:number, b:number ) => {
    console.log(a+b);
}
add(2,78);
//add('r',4); is not possible
//add(5); is not possible

const add = ( a:number, b:number, c?: string|number ) => {
    console.log(a+b);
    console.log(c);    // ans is undefined
}
add(2,78); //possible because of ? that is optional feild.

const add = ( a:number, b:number, c: string|number = 10): void => { // 10 is the default value
    console.log(a+b);
    console.log(c);    // ans is 10
}
add(2,78);

//note - default value and optional feild cannot be used at same time

const minus = (a:number, b:number ):number => {
    return a+b;
}
let result = minus(3,1);
//result = 'not'; is not possible   because its giving return value as number.

#9

//type 1
const logDetails = (uid: string|number, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

//type 2
type StringOrNum = string|number;
const logDetails = (uid: StringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

type objWithName = {name:string, uid:StringOrNum};
const greet = (user:objWithName ) => {
    console.log(`${user.name} say hello`);
}

#10
*/
//example 1
let greet; //signature
greet = (name, greeting) => {
    console.log(`${name} say ${greeting}`);
};
//example 2
let cal;
cal = (numOne, numTwo, action) => {
    if (action === 'act') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//note - if must have else because of number signature
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${name} is ${age} years old.`);
};
