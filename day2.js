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
//# sourceMappingURL=day2.js.map