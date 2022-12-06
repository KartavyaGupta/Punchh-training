c1 = {
  x: 5,
  y: 10,
};
c2 = {
  x: 20,
  y: 30,
};
describe = ({ x, y }) => {
  console.log(x);
  console.log(y);
};
function describe_new() {
  console.log(this.x);
  console.log(this.y);
}
a = 2;
b = 4;
function placeholder() {
  console.log(this);
  return this;
}

describe_new();
// // binding describe_new with c1
exec=describe_new.bind(c1);
exec();

placeholder();
let aplaceholder = placeholder.bind(a);
let bplaceholder = placeholder.bind(b);
aplaceholder();
let sum = aplaceholder() + bplaceholder();
console.log(sum);

function myfunc() {
  console.log(this);
}
myfunc_new = () => {
  console.log(this);
};
a = 2;
myfunc();
myfunc_new();
amyfunc = myfunc.bind(a);
amyfunc_new = myfunc.bind(a);
amyfunc();
amyfunc_new();
