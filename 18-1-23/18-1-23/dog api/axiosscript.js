document.getElementById("id1").addEventListener("click", makearequest);
async function makearequest() {
  const ai1 = axios.create({
    baseURL: "https://dog.ceo/api/breeds/image",
  });
  const config = {
    method: "GET",
    url: "/random",
  };
  let data = await ai1(config);
  document.getElementById("img1").src=data.data.message
  console.log(data);
}