// let value: any = "Hello";
// value = 12;
// console.log(value);

function addOne(num: number){
    return num+1;
}

const double = (x:number,y:number) => x+y;

const result:number =  addOne(3)
console.log(double(12,3))

function greet(person = 'anonymous'){
    return person;

}

function double1 (x:number):number {
    return x+1;
}
console.log(double1(4));

function printMsg( msg: string):void {
    console.log(msg)
}
printMsg("hello world")
  
