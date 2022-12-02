//implement square of array manually 
list=[1,2,3,4,5];
square= (x) =>{
    return x*x;
}

for(let i of list){
    console.log(square(i));
}
console.log("---------------")
//implementing square of array using map

console.log(list.map(square,list));
