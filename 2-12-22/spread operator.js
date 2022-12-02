//copy by reference
a=[1,2,3];
b=a;

//copy by value
c=[1,2,3];
d=[...c];
console.log(c,d);
c[0]=10;
console.log(c,d);

//merge lists
e=[1,2,3];
f=[4,5,6];
g=[...e,...f,1,1,2];

//copy object by reference
user={
    name:'kg',
    value:10,
}
newuser=user;
//copy object by value
newuser={...user};
console.log(newuser);
newuser.name="mg";
console.log(newuser);