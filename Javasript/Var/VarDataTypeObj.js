console.log("hi ")

// var a=5;
// a=a+1;//allowed
// var b=6
// var c="hi"
let a=5;
// a=a+1;//allowed
let b=6
// let c="hi"
//  console.log(a+b+9)
//  console.log(typeof a ,typeof b,typeof c)

//  const a1=6;
//  a1=a1+1; not allowed

//let is globally scope as well as block scope 
//var is only globally scope


{

    let a=8; // but in case of var it will always give global value
    console.log(a);
}
console.log(a);

let x="shreya";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

let o={
    "name": "Harry",
    "job code":5600
}

console.log(o)
o.salary="100crores"
console.log(o)

o.salary="500crores"
console.log(o)
