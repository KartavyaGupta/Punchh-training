const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// console.log(person);

let text = person.constructor;
// console.log(text);
const keys = Object.keys(person);
// console.log(keys);
fruits = ["a", "b", "c"];
const stringperson = fruits.toString();
// console.log(stringperson);

//valueof can be used for deep clone
const myArray = fruits.valueOf();
console.log(myArray);
myArray[0] = "d";
console.log(myArray);

//object method

let message = "Hello world!";
let x = message.toUpperCase();
console.log(x);

const c = 2;
console.log(c.valueOf());

//loop
const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};

//for i in loop
for (i in person1) {
  console.log(person1[i]);
}

for (i of fruits) {
  console.log(i);
}

// Create an object:
const desc = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get language_name() {
    return this.language;
  },
};


function employee(firstname,lastname,salary){
    this.firstname=firstname;
    this.lastname=lastname;
    this.salary=salary;
    this.fullname=function(){
        return this.firstname+this.lastname;
    }
}

e1= new employee("a","b",100)
console.log(e1);
e1.dob="1/1/96";
console.log(e1);
console.log(e1.fullname());

employee.prototype.command="sir, yes sir";
console.log(e1.command);
employee.prototype.fullname_using_prototype=function (){
    return this.firstname+this.lastname;
}
console.log(e1.fullname_using_prototype())