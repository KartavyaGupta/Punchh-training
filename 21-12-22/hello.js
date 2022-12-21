// using json stringify
// using parse

const { string } = require("prop-types");

const text = {
  name: "kartavya",
  marks: 75,
  classes_passed: [1, 2, 3, 4, 5],
  friends: [
    {
      name: "venu",
      lastname: "madhav",
    },
    {
      name: "rohit",
      lastname: "sakala",
    },
  ],
  married: false,
  date: "1-1-11111110",
  dead: null,
};
const newtext = JSON.stringify(text);
// console.log(typeof newtext);
const newnewtexxt = JSON.parse(newtext);
// console.log(typeof newnewtexxt);

//dealing with dates in json
const text1 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const text2 = JSON.parse(text1);
// console.log(text2);
// console.log(typeof text2.birth);
text2.birth = new Date(text2.birth);
// console.log(typeof text2.birth);
//using reviver parameter for date

const text3 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const text4 = JSON.parse(text3, (key, value) => {
  if (key == "birth") {
    return new Date(value)
  }
  return value;
});
// console.log(text4);
// console.log(typeof text4.birth)



const text5 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
let text6 = JSON.parse(text5)
console.log(text6)
console.log(text6.age);


//json.stringify remove function from object
let text7= {"name":"John", age:function () {return 30;}, "city":"New York"};
const text8=JSON.stringify(text7);
console.log(text8);


let text9= {"name":"John", age:function () {return 30;}, "city":"New York"};
console.log(JSON.stringify(text9));
text9.age=(text9.age.toString())
// text9.age=(new String(text9.age))
console.log(JSON.stringify(text9));


