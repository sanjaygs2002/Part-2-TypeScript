import { add,concat } from "./operation";
import welcomeMsg from "./greet";

console.log(add(2,5));

console.log(concat("Dharun","Kumar"));

console.log(welcomeMsg("venkat"))

class Logger {
  log() {
    console.log("Logging...");
  }
}

class Timestamp {
  getTime() {
    return new Date();
  }
}

// class c extends Timestamp,Logger{
    
// }

class App {}

interface App extends Logger, Timestamp {}

applyMixins(App, [Logger, Timestamp]);

const app = new App();
app.log();
console.log(app.getTime());


function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== "constructor") {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
        );
      }
    });
  });
}

interface User<T,U>{
    name:T,
    age: U,
}

const user:User<string,number>={
    name:"Sanjay",
    age:23
}

console.log(user);

