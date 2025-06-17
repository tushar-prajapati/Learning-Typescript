// // Type guards

type Mytype = string | number;

function example(value: Mytype): void {
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}

example("Hello")
example(2);


// // With instanceof operator

class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function animalSound(animal: Cat | Dog): void {
    if(animal instanceof Dog){
        animal.bark();
    }
    else {
        animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myCat)
animalSound(myDog)



// // intersection types

