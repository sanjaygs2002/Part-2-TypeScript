"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("06-04-2026");
const update = {
    name: "Sanjay",
    age: 21,
    role: "Engineer"
};
update.name = "Ram";
console.log(update.name); // all properties are optional here ,used for patch updating
const value = {
    name: "Dharsan",
    age: 23,
    role: "Engineer"
};
console.log(value);
const data = {
    insureName: "Sanjay",
    insureAge: 34,
    insureType: "Car"
};
// data.insureAge= 23;
console.log(data);
const res = {
    player: "Sanjay",
    //age:26
};
console.log(res);
const res1 = {
    name: "Sanjay",
    email: "sanjay@gmail.com",
    //age:34
};
console.log(res1);
// Record
const scorecard = {
    "player1": 67,
    "player2": 100
};
console.log(scorecard);
const res3 = {
    "admin": "hi",
    "user": "Hello"
};
console.log(res3);
const states = "pending";
console.log(states);
const res404 = "not found";
console.log(res404);
const res4 = "Krish";
const res5 = 4;
console.log(res4);
console.log(res5);
// ReturnType
function getProfileLinkedIn(name, post) {
    return { name, post };
}
const res6 = {
    name: "Sanju",
    post: 30
};
console.log(res6);
// Parameters<T>
const add = (a, b, c) => {
    return [a + b + c];
};
const res7 = [2, 3, 4];
console.log(res7);
// Awaited
async function getData() {
    return { name: "Sanjay", city: "Pollachi" };
}
const res8 = {
    name: "Sanjay",
    city: "Pollachi"
};
console.log(res8);
//# sourceMappingURL=06-04-2026.js.map