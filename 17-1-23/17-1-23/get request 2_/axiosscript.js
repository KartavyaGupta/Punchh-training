document.getElementById("btn").addEventListener("click", makearequest);
// function makearequest() {
//     console.log("hello world")
//   axios.get("data.json").then((data) => {
//     console.log("data");
//     console.log(data);
//     document.getElementById("id1").innerHTML=data.data.name
//     document.getElementById("id2").innerHTML=data.data.roll

//   }).catch((error)=>{
//     console.log("from error ",error);
//   });
// }

//await and async error handling
// async function makearequest() {
//   try {
//     let data = await axios.get("data1.json");
//     console.log(data);
//     console.log(data.data.name);
//     console.log(data.data.roll);
//   } catch (error) {
//     console.log("error is ",error);
//   }
// }

async function makearequest() {
  //   let data = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  let data = await axios.get("https://jsonplaceholder.typicode.com/posts/");
  config = {
    params: {
      id: 1,
    },
  };
//   let firstel=data.data[0]

//   let firstel=data
//   console.log(firstel);
//   for(i in firstel){
//     console.log(i,firstel[i]);
//   }

    data.data.forEach(element => {
        document.getElementById("div1").innerHTML+=`
        <div>${element.id}</div>
        <div>${element.title}</div>
        <div>${element.body}</div> <hr>`

    });      
}
