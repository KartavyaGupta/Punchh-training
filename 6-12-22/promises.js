//example of callback function
const a=[1,2,3];
function show(val){
    console.log(val);
}
function sum(a,callback){
    let total=0;
    for(i of a){
        total+=i;
    }
    // console.log(total);
    callback(total);
}
// sum(a,show);

//example of a promise
let y=false
let x=new Promise(function(myResolve,myReject){
    if(y==true){
        myResolve("ok");
    }
    else{
        myReject("error");
    }
})

x.then(
    function(value){
        console.log("true");
    },
    function(error){
        console.log("error");
    }
)
// converting above sum example to a promise
const k=[1,2,3];

let new_total=0;
let promise_new=new Promise(function(myResolve,myReject){
    for(let i of k){
        if (typeof i =='number'){
            console.log(typeof i);
            new_total+=i;
        }
        else{
            myReject();
        }
        console.log(i);
        console.log(typeof i);

    }
    myResolve(new_total);

}).then(
    function(val){
        console.log("sum is ",val);
    },
    function(error){
        console.log("garbage input");
    }
)


//promise chaining
new Promise(function(resolve,reject){
    resolve();
    
}).then(
    function(){
        return new Promise(function(resolve, reject) {
            resolve();    
        })
    }

).then(
    function(){
        return new Promise(function(resolve,reject){
            resolve();
        })
    }
).then(function(){
    console.log("done");
})