console.log("03/04");

// type User = { name: string };
// type Admin = { role: string };

// let person: User | Admin;

// let user:User={name:"sanjay"}

// console.log(user.name);


// type User = {
//   name: string;
//   email: string;
// };

interface User{
    name:string,
    email:string,
}

// enum Status {
//     pending,
//     success,
//     error
// }


type Status= "pending" | "error";


type Users = { name: string };
type Admin = { role: string };

let Person : User | Admin;

let admin: Admin={
    role:"Engineer"
}
function check(person: Users | Admin) {
  if ("role" in person) {
    console.log(person.role);
  }
}
check(admin)

// Generic's

function printValues<T,U>(a:T,b:T,c:T):T[]{
    return [a,b,c]
}
let values= printValues<number,string>(1,2,3);
console.log(values);

// Array

function getValues<T>(nums:T[]):T[]{
    return nums;
}

let value= getValues([1,2,3,4,5]);
console.log(value);
 
function getSum<T>(nums: T[], addFn: (a: T, b: T) => T, initial: T): T {
    return nums.reduce(addFn, initial);
}

let sum = getSum([1, 2, 3, 4], (a, b) => a + b, 0);
console.log(sum); // 10

interface Shape<T>{
  circle:T
}

let shape :Shape<number>={
  circle:5.9
}
console.log("circle",shape.circle);

// interface multiple type
interface Employee<T,U>{
  name:T,
  age:U
}

let employee:Employee<string,number>={
  name:"Sanjay",
  age:23
}

console.log(employee);

let employee1: Employee<string,boolean>={
  name:"Ram",
  age:true
}
console.log(employee1);

// Interface with function

interface Multiple<T>{
    (x:T,y:T):T
}

const multiple:Multiple<number>=(x:number,y:number)=>{
  return x*y;
}
console.log(multiple(7,9));

// Interface with methods

interface Account<T>{
  add(item : T) : void
  get():T
}

class SubAccount  implements Account<number>{

  private value!:number // ! = I will assign this value later before using it

  add(item: number):void{
    this.value=item;
  }
  get(): number {
    return this.value
  }

}
const newAcc = new  SubAccount()
newAcc.add(30);
console.log(newAcc.get());

function name<T extends string>(name:T){
  return name;
}
console.log(name("Sanjay"));

// keyof
type Record ={
   name: string,
   age:number
}
function getRecord(obj: Record, key: keyof Record){
  return obj[key];
}
const person: Record = { name: "Alice", age: 25 };
console.log(getRecord(person,"name"));
console.log(getRecord(person,"age"));

// typeof
const AccountUser={
  name: "Sanjay",
  accno: 28
}
function getAccount(res:typeof AccountUser){
  console.log(res.accno,res.name);
}
getAccount(AccountUser)

// Indexed access type

type AccountUser={
  name: "Sanjay",
  accno: 28
}
type AccountType = AccountUser["name"];

console.log(AccountUser.name);


type IsString<T> = T extends string ? "YES" : "NO";
type A = IsString<string>; 
type B = IsString<number>; 
const u: IsString<number>="NO"
console.log(u);

const a:A="YES"
console.log(a);

type ExtractType<T> = T extends number ? T : never;
type Result = ExtractType<number | string>;

const t: Result=8;
console.log(t);

type Userss = {
  name: string;
  age: number;
};

type CopyUser = {
  [K in keyof Userss]?: Userss[K];
};

const m: CopyUser={
  name:"Sanjay",
  //age:9
}
console.log(m);






