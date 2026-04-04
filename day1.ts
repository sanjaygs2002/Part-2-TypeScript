// let name : string= "Sanjay";
// console.log(name);

// let str: string = "helmet"
// if(typeof str ==="string"){
//     console.log(str);  
// }

// function add(a:number,b:number) {
//     return a+b;
    
// }
// console.log(add(2,3))

// // never
// function throwError(): never {
//     throw new Error("Error occurs");
// }

// try {
//     throwError();
// } catch (err) {
//       if (err instanceof Error) {
//         console.error("Caught an error:", err.message);
//     } else {
//         console.error("Caught something unexpected:", err);
//     }
// }

// // Optional parameter

// function isPerson(name?:string){
//     console.log(name);
    
// }
// isPerson("Sanjay");

// // default parameter

// function welcome(name:string="Welcome ram"){
//     console.log(name);
    
// }
// welcome("welcome sanjay");

// function totalSum(...number:number[]):number{
//     return number.reduce((acc,item)=>acc+item,0);
// }
// console.log(totalSum(1,2,3,4,5,5,6,7));

// // Arrays and tuples

// let counting: number[] =[1,2,3,4,5,6,7,8,9,10]
// let count: Array<string>=["apple", "mongo", "pineapple", "apple"];

// const res= counting.filter(item=>item%2===0)
// console.log(res);

// // const res1= count.reduce((acc,item)=>{
// //      acc[item]=(acc[item]||0)+1
// //      return acc;
// // },{});
// // console.log(res1);

// //Readonly => once value us set it cannot be used to update.

// const values: readonly number[]= [1,2,3,4,5];
// // values.push(2);

// const users:{name:string, age:number}[]=[
//     {name:"Sanjay",age:21},
//     {name:"Ram", age:23},
// ]
// console.log(users);

// // Tuples => fixed structure data

// const userName:[string,number]=["Sanjay",20];
// console.log(userName);

// const insure :[string, number?]=["CarInsurance", 120000];
// console.log(insure);

// // Object with functions
// let msg:{name:string,age:number, welcome:()=>void}=
//         {name:"Sanjay", age:21,welcome() {
//             console.log(`My name is ${this.name} age is ${this.age}`);
            
//         }}
//     msg.welcome();

// // union types
// let val: string| number;
// val="Sanjay";
// val=21;
// // val=true;

// function printId(id: string | number) {
//   console.log(id);
// }
// printId(7);

// // problem in union type is if string we cannot perform operation directly. To overcome use type narrowing


// function print(id: string | number) {
//     if(typeof id ==="string"){
//         console.log(id.toUpperCase());
//     }
//   console.log(id);
// }
// print(7);
// print("Sanjay")

// type User = { name: string };
// type Admin = { role: string };
// let person: User | Admin;
// let data:User={name:"Ram"}
// // let User: {name:string};
// // let Admin : {role:string};
// // let sol: User| Admin;
// person=data
// console.log(person.name);

// // if("name" in person){
// //     console.log(person.name); 
// // }

// type Success= {
//     status:"success",
//     data: string
// }

// type Error={
//     status:"Error",
//     message:string
// }

// type Response= Success | Error;

// let data2: Response={
//     status:"success",
//     data:"Data received"
// }
// console.log(data2);

// // Enum => way to defined the set of named constants

// enum status{
//     pending,
//     success, 
//     error
// }
// console.log(status.pending);
// console.log(status.error);

// enum Status {
//   Pending = "PENDING",
//   Success = "SUCCESS",
//   Error = "ERROR"
// }
// console.log(Status);

// enum Role {
//   Admin,
//   User
// }
// let r: Role = Role.Admin;
// console.log(r);
// function checkRole(role: Role) {
//   if (role === Role.Admin) {
//     console.log("Admin access");
//   }
// }
// console.log(checkRole);

// Interface
interface User{
    readonly name: string,
    age?:number,
    readonly panNo: string,
    readonly accNo:number
}

let user:User={
    name:"sanjay",
    age:21,
    panNo:"OPPA367938",
    accNo:12345678900987
}
console.log(user);

// Function in interface

interface Welcome{
    name:"Sanjay",
    greet(): void
}

let wel:Welcome={name:"Sanjay",greet() {
    console.log(`Welcome ${this.name}`);
    
},}

wel.greet()

interface AddFunction {
    (x:number,y:number): number  // => This line this syntax called method signature.
}
let adds : AddFunction=(p1:number,p2:number)=>{
    return p1+p2;
}
console.log(adds(8,90));

// Define the base User interface
interface Users {
  name: string;
  age: number;
}

// Extend User to create Employee interface
interface Employee extends Users {
  employeeId: number;
  id: number;
  email: string;
}

// Create an Employee object with all required properties
const employees: Employee = {
  name: "Sanjay",
  age: 23,
  employeeId: 1297,
  id: 1,
  email: "sanjay@example.com"
};

// Log the employee object
console.log(employees);

type PaymentMethod = "CreditCard" | "UPI" | "COD";
type OrderStatus = "Pending" | "Delivered" | "Cancelled";

type Order = {
  id: number;
  customerName: string;
  totalAmount: number;
  payment: PaymentMethod;
  status: OrderStatus;
};

const order1: Order = {
  id: 1,
  customerName: "Sanjay",
  totalAmount: 4999,
  payment: "UPI",
  status: "Pending",
};

console.log(order1);



