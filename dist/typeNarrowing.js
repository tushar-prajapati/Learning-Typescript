"use strict";
// // Type guards
function example(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
example("Hello");
example(2);
// // With instanceof operator
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myCat);
animalSound(myDog);
// // intersection types
//# sourceMappingURL=typeNarrowing.js.map