// Semana 2 - Clase 3

// initialize greeting function
function greet(name) {
    console.log(`Hello!, ${name}!`)
}

greet('Daniel');

// function add(x,y) {
//     console.log('add', x + y)
//     return x + y;
// }

// add(5,7);

const sum = function add(x,y) {
    console.log('add', x + y)
    return x + y
}

sum(20,5)

const multiply = (x,y) =>  {
    console.log('multiply', x * y)
    return x * y
}

multiply(12,4)

const square = x => {
    console.log('square',x * x)
    return x * x;
}

square(2);

const squareSimplify = x => x * x;;
squareSimplify(4);

const speak = function(name = 'John', time = 'morning') {
    console.log(`good ${time}, ${name}`);
}
speak()
speak('Daniel', 'night')

const calcArea = function(radius) {
    let area = 3.14 * radius**2;
    console.log(area)
}
calcArea(5)

const bill = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log('bill', bill([10,12,13], 0.18));
