"use strict";
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age, "Canine");
    }
    getInfo() {
        return `${this.getName()} is a ${this.getSpecies()} and is ${this.getAge()} years old`;
    }
}
const d = new Dog('Alice', 23);
console.log(d.getInfo());
//# sourceMappingURL=accessModifiers.js.map