"use strict";
// let name : string= "Sanjay";
// console.log(name);
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "sanjay",
    age: 21,
    panNo: "OPPA367938",
    accNo: 12345678900987
};
console.log(user);
let wel = { name: "Sanjay", greet() {
        console.log(`Welcome ${this.name}`);
    }, };
wel.greet();
let adds = (p1, p2) => {
    return p1 + p2;
};
console.log(adds(8, 90));
// Create an Employee object with all required properties
const employees = {
    name: "Sanjay",
    age: 23,
    employeeId: 1297,
    id: 1,
    email: "sanjay@example.com"
};
// Log the employee object
console.log(employees);
const order1 = {
    id: 1,
    customerName: "Sanjay",
    totalAmount: 4999,
    payment: "UPI",
    status: "Pending",
};
console.log(order1);
//# sourceMappingURL=day1.js.map