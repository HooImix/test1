//////////
// AVANCED FUNCTIONS
/////////

//pre:
function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second;
}

//post:
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures: - a function ran. the function executed. It's never going to exectute again. But it's going to remember that there are references to those variables, so the child scope always has access to the parent scope.




AudioWorkletNode.baoenthuba.thhtc. ateoh.bsnth

//Curring
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
curriedMultiply(3);

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);



//Avoiding side-effects and functional purity
