function printInfo<T>(x: T): T{
    return x;
}

const str = printInfo<string>("Hello");

console.log(str) 

function filterArray<T>(array:T[], condition: (item:T)=> boolean):T[]{
    return array.filter((item)=>condition(item));
}

const nArray = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = filterArray<number>(nArray, (n)=> n%2 ==0)
console.log(evenNumbers)


function reversePair<T,U>(value1:T, value2: U): [U,T]{
    return [value2,value1];
}

const reversedPair = reversePair("Hello",20);
console.log(reversedPair)

