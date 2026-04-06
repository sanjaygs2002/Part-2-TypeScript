"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("05-04");
const me = {
    name: "Sanjay",
    age: 21,
    role: "Engineer"
};
function getPerson(obj, key) {
    return obj[key];
}
console.log(getPerson(me, "name"));
// type
const carInsurance = {
    cusName: "Sanjay",
    cusAge: 34,
};
//type Insurance = typeof carInsurance
function getRecord(key) {
    console.log(key.cusAge);
}
getRecord(carInsurance);
//# sourceMappingURL=day3.js.map