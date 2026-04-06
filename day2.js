"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("03/04");
let Person;
let admin = {
    role: "Engineer"
};
function check(person) {
    if ("role" in person) {
        console.log(person.role);
    }
}
check(admin);
// Generic's
function printValues(a, b, c) {
    return [a, b, c];
}
let values = printValues(1, 2, 3);
console.log(values);
// Array
function getValues(nums) {
    return nums;
}
let value = getValues([1, 2, 3, 4, 5]);
console.log(value);
function getSum(nums, addFn, initial) {
    return nums.reduce(addFn, initial);
}
let sum = getSum([1, 2, 3, 4], (a, b) => a + b, 0);
console.log(sum); // 10
let shape = {
    circle: 5.9
};
console.log("circle", shape.circle);
let employee = {
    name: "Sanjay",
    age: 23
};
console.log(employee);
let employee1 = {
    name: "Ram",
    age: true
};
console.log(employee1);
const multiple = (x, y) => {
    return x * y;
};
console.log(multiple(7, 9));
class SubAccount {
    value; // ! = I will assign this value later before using it
    add(item) {
        this.value = item;
    }
    get() {
        return this.value;
    }
}
const newAcc = new SubAccount();
newAcc.add(30);
console.log(newAcc.get());
function name(name) {
    return name;
}
console.log(name("Sanjay"));
const person = { name: "Alice", age: 25 };
function getRecord(obj, key) {
    return obj[key];
}
console.log(getRecord(person, "name"));
console.log(getRecord(person, "age"));
// typeof
const AccountUser = {
    name: "Sanjay",
    accno: 28
};
function getAccount(res) {
    console.log(res.accno, res.name);
}
getAccount(AccountUser);
console.log(AccountUser.name);
const u = "NO";
console.log(u);
const a = "YES";
console.log(a);
const t = 8;
console.log(t);
const m = {
    name: "Sanjay",
    //age:9
};
console.log(m);
//# sourceMappingURL=day2.js.map