async function show() {
  console.log("hello world");
  const ai1 = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  ai1.defaults.headers.common["Authorization"] = "himynameisslimshady1";
  await ai1.get("/posts/3").then((data) => {
    let recdata = data.data;
    for (i in recdata) {
      console.log(recdata[i]);
    }
  });

  console.log("----------------------");
  const ai2 = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  ai2.defaults.headers.common["Authorization"] = "himynameisslimshady2";
  await ai2.get("/posts/2").then((data) => {
    let recdata = data.data;
    for (i in recdata) {
      console.log(recdata[i]);
    }
  });
  console.log("all requests completed");
}
show();