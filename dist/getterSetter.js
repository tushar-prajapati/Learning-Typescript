"use strict";
class MyClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new MyClass();
myInstance.myProperty = 10;
console.log(myInstance.myProperty);
//# sourceMappingURL=getterSetter.js.map