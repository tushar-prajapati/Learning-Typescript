class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person('Tushar',22);

console.log(p1.name)