employee = {
  name: {
    firstname: "k",
    lastname: "g",
  },
  roll: 201356193,
  role:"dev"
};
console.log(employee)
const myfunc= ({name,role})=>{
    
    console.log(name,role);
}
myfunc(employee);