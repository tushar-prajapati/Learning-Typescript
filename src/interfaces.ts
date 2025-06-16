interface Person {
    name: string;
    age: number;
}

const person: Person ={
    name: "John Doe",
    age: 32
}

// // Interaface with functions

interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a,b) => a+b;
const subtract: MathOperation = (a,b) => a-b;
// console.log(add(2,4));
// console.log(subtract(7,2));  


// // Interfaces for classes

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(){
        console.log("Car Started!");
    }
    stop(){
        console.log("Car Stopped!");
    }
}

const car = new Car();
// car.start();

