document.getElementById("btn").addEventListener("click", makearequest);
// function makearequest() {
//   console.log("button clikced");
//   config = {
//     method: "get",
//     url: "data.txt",
//   };
//   const promiseObj = axios(config);
//   promiseObj.then((res) => {
//     console.log(res.data);
//   });
// }

// function makearequest(){
//     config={
//         method:"get",
//         url:"data.txt",
//     }
//     axios(config).then((res)=>{
//         console.log(res.data);
//     })
// }

function makearequest() {
  axios
    .get("data.txt")
    .then((res) => {
      return res.data;
    })
    .then((value) => {
      document.getElementById("data").innerHTML = value;
    });
}

// function makearequest() {
//   axios
//     .get("data1.txt")
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }


// async function makearequest(){
//     // const config={
//     //     method:'get',
//     //     url:'data.txt'
//     // }
//     // const data=await axios(config);
//     // console.log(data.data)

//     const newconfig={
//         method:'get',
//     }
//     const data=await axios(url='data.txt',newconfig);
//     console.log(data.data)
// }



// async function makearequest(){
//     // const config={
//     //     method:'get',
//     //     url:'data.txt'
//     // }
//     // const data=await axios(config);
//     // console.log(data.data)

//     const newconfig={
//         method:'get',
//     }
//     try{
//         const data=await axios(url='data2.txt',newconfig);
//         console.log(data.data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }



async function makearequest(){
    // const config={
    //     method:'get',
    //     url:'data.txt'
    // }
    // const data=await axios(config);
    // console.log(data.data)

    const newconfig={
        method:'get',
    }
    try{
        const data=await axios(url='data.txt',newconfig);
        console.log(data.data)
        document.getElementById("data").innerHTML = data.data;
    }
    catch(error){
        console.log(error);
    }
}