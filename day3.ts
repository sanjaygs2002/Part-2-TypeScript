console.log("05-04");

// typeof
type Person={
    name:string,
    age:number,
    role: string
}

const me : Person={
    name:"Sanjay",
    age:21,
    role:"Engineer"
}

function getPerson(obj:Person, key: keyof Person){
        return obj[key];
    
}
console.log(getPerson(me,"name"));

// type

const carInsurance={
    cusName:"Sanjay",
    cusAge:34,
}

//type Insurance = typeof carInsurance

function getRecord(key: typeof carInsurance){
    console.log(key.cusAge);
}
getRecord(carInsurance)
