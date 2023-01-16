// PromiseObj = new Promise((resolve,reject)=>{
//     let req=false;
//     if(req==true){
//         resolve(["promise","resolved"]);
//     }
//     else{
//         reject(["promise","rejected"]);
//     }
// })

// PromiseObj.then((value)=>{console.log(value)},(value)=>{console.log(value)});

// PromiseObj1 = new Promise((resolve, reject) => {
//   let req = false;
//   if (req == false) {
//     resolve(["promise", "resolved"]);
//   } else {
//     reject(["promise", "rejected"]);
//   }
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log("executing catch");
//     console.log(value);
//   })
//   .finally((value) => {
//     console.log("finally to hamesha hi chalta hain hui");
//   });

// PromiseObj1 = new Promise((resolve, reject) => {
//   //   resolve(100);
//   reject(100);
// })
//   .then(
//     (value) => {
//       console.log("resolved 1");
//       console.log(value);
//       return value;
//     },
//     (value) => {
//       console.log("rejected 1");
//       console.log(value);
//       return value;
//     }
//   )
//   .then(
//     (value) => {
//       console.log("resolved 2");
//       console.log(value);
//       return value;
//     },
//     (value) => {
//       console.log("reject 2");
//       console.log(value);
//       return value;
//     }
//   )
//   .then(
//     (value) => {
//       console.log("resolved 3");
//       console.log(value);
//       return value;
//     },
//     (value) => {
//       console.log("reject 3");
//       console.log(value);
//       return value;
//     }
//   );

PromiseObj2 = new Promise((resolve, reject) => {
  //   resolve(100);
  reject(100);
}).then(
    (value) => {
      console.log("resolved 1");
      console.log(value);
      return value;
    },
    (value) => {
      console.log("rejected 1");
      console.log(value);
      throw new Error();
    }
  )
  .then(
    (value) => {
      console.log("resolved 2");
      console.log(value);
      return value;
    },
    (value) => {
      console.log("reject 2");
      console.log(value);
      //   return value;
      throw new Error();
    }
  )
  .then(
    (value) => {
      console.log("resolved 3");
      console.log(value);
      return value;
    },
    (value) => {
      console.log("reject 3");
      console.log(value);
      return value;
    }
  );



