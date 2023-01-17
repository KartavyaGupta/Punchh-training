const decider = true;
const newPromiseObj = new Promise((resolve, reject) => {
  const decider = false;
  if (decider == true) {
    resolve("hello");
  } else {
    reject("hello");
  }
}).catch((val)=>{
  console.log("val is ",val);
  return val;
})
  .then((val) => {
    console.log(val);
    return val + 10;
  })
  .then(
    (val) => {
      console.log(val);
      return val + 10;
    },
    (error) => {
      console.log("error is ",error);
      return error
    }
  )
  .then((val) => {
    console.log("here is ",val);
  });
