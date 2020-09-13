//SCOPE

function bb() {
    var a = "hello";
}

// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Byee";
    console.log(2, fun);
}
function funestFunction() {
    // child scope
    var fun = "AHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);




var b = "can I access this?";
function bb() {
    b = "hello";
}





//////////////
// ECMAScript international
//////////////
// let and const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);






//Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
const player = obj.player;
const experience = obj.experience;
let vizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;




// Object properties
const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}



//Template strings
const name = "sally";
const age = 53
const pet = "horse";

// the old way of doing:::   conts greetings = "Hello" + name + "you seem to be doing " + greeting + "!"
const greetingBest = `hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

//default arguments
function greet (name='', age=30, pet='cat') {
    return `hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}









/////////////////////
//SYMBOL
/////////////////////
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');







//////////////////
// ARROW FUNCTIONS
////////////////

//old
function add(a,b) {
    return a + b;
}

//new
const add = (a,b) => a + b;
