console.log("07-04");
// string manipulation
// uppercase

type User= string

type Upper= Uppercase<User>

const log : Upper="SANJAY"
console.log(log);

// Lowercase

type EmployeeName= string
type Lower = Lowercase<EmployeeName>
const res:Lower="sanjay"
console.log(res);

// Uncapitalize

type InsureName = string;
type Uncap = Uncapitalize<InsureName>
const res1: Uncap="raM"
console.log(res1);

// Capitalize

type AccountName= string;
type Cap = Capitalize<AccountName>
const res2 : Cap="SanjaY";
console.log(res2);




