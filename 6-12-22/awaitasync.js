async function display(){
    let decide=1
    let k=new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            if(decide==0){
                resolve("hello world ")}
            else{
                resolve("reject world");
            }},1000);
        
    });
    console.log(await k);
}
display();