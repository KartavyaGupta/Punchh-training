debugger;
console.log("start");
function getName(name, callback) {
  console.log(callback);
  setTimeout(() => {
    callback(name);
    return name;
  }, 3000);
}
function gethobby(name, callback) {
  setTimeout(() => {
    callback([1,2,3]);
  },4000);
}
name = getName("soname", (k) => {
  console.log(k);
  gethobby(k,(hobby)=>{console.log(hobby)})
});
console.log("end");
