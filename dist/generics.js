"use strict";
function printInfo(x) {
    return x;
}
const str = printInfo("Hello");
console.log(str);
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const nArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(nArray, (n) => n % 2 == 0);
console.log(evenNumbers);
function reversePair(value1, value2) {
    return [value2, value1];
}
const reversedPair = reversePair("Hello", 20);
console.log(reversedPair);
//# sourceMappingURL=generics.js.map