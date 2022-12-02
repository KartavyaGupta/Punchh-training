// default way to destructure values
list=[1,2,3]
console.log(list[0])
console.log(list[1])
console.log(list[2])

//skipping values in destructuring
var [a,,c]=list
console.log(a,c)

//using default values with destructuring
list=[1,2,3]
var [e,f,g=10]=list
console.log(a,c)


var i,j;
[i=10,j=20]=[11]
console.log(i);

//using rest parameter
list1=[1,2,3,4,5,6]
var func=([l,m,n,...rest])=>{
    console.log(l);
    console.log(m);
    console.log(n);
    console.log(rest);
}
func(list1);

//destructuring array returned from a function
list2=[1,2,3,4,5];
var func2 = (x) =>{
    return x;
}
var [val1,val2,val3]=func2(list2);
console.log(val1);
console.log(val2);
console.log(val3);

// nested array destructuring
var b;
list3=[1,2,3,[4,5]]
[a,b,c,[d,e]]=list3;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);