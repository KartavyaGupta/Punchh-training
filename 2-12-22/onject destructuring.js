

//default
var obj1 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(obj1.a,obj1.b,obj1.c);
// destructure 

var { a, b, c } = obj1;
console.log(a, b, c)

//new name for keys
var { a: newa, b: newb, c: newc } = obj1;
console.log(newa);
console.log(newb);
console.log(newc);

//with default values
var {a,b=20}={a:10}
console.log(a,b);

var {a=10,b=20}={a:20}
console.log(a,b);

// with default values and new keys
var {a:x=10,b:y=20}={a:20}
console.log(x,y);

// object passing to a function
func=({a,b,c})=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
func(obj1);

// object destructured but not utilizing all keys
func=({a,c})=>{
    console.log(a);
    
    console.log(c);
}
func(obj1);

// destructuring object returning from a function
function show(x){
    return x;
}
var {a,b,c}=show(obj1);
console.log(a,b,c);

//netsed object destructuring
var obj2={
    a:1,
    b:2,
    c:3,
    d:{
        e:4,
        f:5,
    }
};
var {a,b,c,d:{e,f}}=obj2;
console.log(a,b,c,e,f)