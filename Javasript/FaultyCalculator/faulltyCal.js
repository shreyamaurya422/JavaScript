function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

function mul(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}

function expo(a,b){
    console.log(a**b);
}

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));


let r = Math.random();

console.log("Generated random number:", r);
if(r < 0.1){
    console.log("Addition of two numbers is:");
    sub(a,b);

    console.log("Multiplication of two numbers is:");
    sum(a,b);

    console.log("Subtraction of two numbers is:");
    div(a,b);

    console.log("Division of two numbers is:");
    expo(a,b);

}
else{

    console.log("Addition of two numbers is:");
    sum(a,b);

    console.log("Multiplication of two numbers is:");
    mul(a,b);

    console.log("Subtraction of two numbers is:");
    sub(a,b);

    console.log("Division of two numbers is:");
    div(a,b);

}