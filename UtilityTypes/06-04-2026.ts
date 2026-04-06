// console.log("06-04-2026");

// // Partial
// type Employee={
//     name:string,
//     age :number,
//     role: string
// }

// type PartialUpdate= Partial<Employee>

// const update : PartialUpdate ={
//     name:"Sanjay",
//     age:21,
//     role:"Engineer"
// }

// update.name="Ram"

// console.log(update.name);  // all properties are optional here ,used for patch updating

// type required= Required<Employee>

// const value: required ={
//     name:"Dharsan",
//     age:23,
//     role:"Engineer"
// }

// console.log(value);

// // Readonly

// type Insurance={
//     insureName:string,
//     insureAge: number,
//     insureType: string,
// }

// type InsuranceDetails= Readonly<Insurance>
// const data: InsuranceDetails={
//     insureName:"Sanjay",
//     insureAge:34,
//     insureType:"Car"
// }

// // data.insureAge= 23;
// console.log(data);

// //Pick<T,K>

// type Cricket={
//     player:string,
//     age:number,
//     role: string
// }

// type Res= Pick<Cricket,"player">

// const res: Res={
//     player:"Sanjay",
//     //age:26
// }
// console.log(res);

// // Omit<T,K>

// type UserDetails={
//     name:string,
//     age:number,
//     // email:`${string}@${string}`,
//      email:string,
// }

// type Val= Omit<UserDetails, "age">

// const res1: Val={
//     name:"Sanjay",
//     email:"sanjay@gmail.com",
//     //age:34
// }

// console.log(res1);

// // Record

// const scorecard : Record<string,number>={
//     "player1": 67,
//     "player2": 100
// }
// console.log(scorecard);

// // Restricting key from Union

// type Role = "admin" | "user"

// type RoleAccess = Record<Role, string>

// const res3: RoleAccess={
//     "admin":"hi",
//     "user":"Hello"
// }

// console.log(res3);

// // Exclude

// type PromiseStates= "pending"| "fulfilled" | "Rejected"

// type States= Exclude<PromiseStates, "Rejected">

// const states: States= "pending"
// console.log(states);

// // Extract

// type ErrorCode= "created" | "Internal server error" | "not found"

// type Codes= Extract<ErrorCode, "Internal server error" | "not found">

// const res404: Codes="not found"
// console.log(res404);
 
// // Non - Nullable

// type NullChecks=null | undefined | string | number

// type Checks = NonNullable<NullChecks>

// const res4: Checks="Krish"
// const res5: Checks=4;

// console.log(res4);
// console.log(res5);

// // ReturnType
// function getProfileLinkedIn(name:string,post:number){
//     return {name,post};
// }

// type LinkedInUser= ReturnType<typeof getProfileLinkedIn>

// const res6: LinkedInUser={
//     name:"Sanju",
//     post:30
// }
// console.log(res6);

// // Parameters<T>

// const add =(a:number,b:number,c:number)=>{
//     return [a+b+c];
// }

// type Addition = Parameters<typeof add>

// const res7: Addition=[2,3,4]
// console.log(res7);

// // Awaited

// async function getData(){
//     return {name:"Sanjay",city:"Pollachi"}
// }

// type AsyncStage= Awaited<ReturnType<typeof getData>>

// const res8: AsyncStage={
//     name:"Sanjay",
//     city:"Pollachi"
// }
// console.log(res8);

// Classes

class Employee{
    name:string;
    age:number
    constructor (name:string,age:number){
        this.name= name;
        this.age= age;
    }
}

const employeeDetails= new Employee("Sanjay",23);
console.log(employeeDetails);

// Access Modifier 
// public => access anywhere in the code

class Insurance{
    insureName: string;
    insureType: string;
    constructor(insureName:string, insureType:string){
        this.insureName=insureName;
        this.insureType= insureType;
    }

}
const insurance = new Insurance("Sanjay","Car");
console.log("Insurance Type",insurance.insureType);

// private

class Account{
    private accountNumber:number;
    accountHolderName: string

    constructor(accountNumber:number,accountHolderName:string){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
    }
    getAcc(){
        console.log(`Account Number ${this.accountNumber}`);
        
    }

}

const account = new Account(1234,"Ram");
account.getAcc();
console.log(account);

// Protected

class Shape{
    protected circle=100
}
class Circle extends Shape{
    showVal(){
        console.log(this.circle);
    }
}
const circle= new Circle()
circle.showVal();

// Inheritance

class CarInsure{
    carName:string
    constructor(carName:string){
        this.carName=carName
    }
    getValues(){
        console.log(` car name is ${this.carName}`);
    }

}
class SteeringType extends CarInsure{
     steer(){
        console.log("Power steering");
     }
}
const car = new SteeringType("Swift");

car.getValues();
car.steer();

// Encapsulation

class Bank{
   private accountName="Jai"

    get accName(){
        return this.accountName;
    }
    set accName(name:string){
        this.accountName= name;
    }
}
    const bank = new Bank();
    bank.accName= "Ram"
    console.log(bank.accName);
    
// interface 
interface Payment {
  pay(amount: number): void;
}

class UPI implements Payment {
  pay(amount: number) {
    console.log("UPI paid", amount);
  }
}

class Card implements Payment {
  pay(amount: number) {
    console.log("Card paid", amount);
  }
}

const payMode = new Card();
const upi = new UPI()
upi.pay(3000)
payMode.pay(2000);

// Abstraction

abstract class Api{
    abstract getData():void;

    log(){
        console.log("Fetching data");
    }
}
class UserService extends Api{
    getData(): void {
        console.log("User Fetched");
    }
}

class AgentService extends Api{
    getData(): void {
        console.log("Agent data fetched");
    }
}

const agent = new AgentService();
agent.getData()