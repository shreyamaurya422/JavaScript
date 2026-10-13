let a=99;
console.log(a);
const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");

button1.innerText = "Go to School";
button2.innerText = "Go to College";
button3.innerText = "Go to Job";
const locations=[
    {
        name:"school",
        "button text":["KG", "Primary", "Secondry"],
        "button functions":[child, adolocence,teen ],
        text:"You are in the school."
    },

    {
        name:"college",
        "button text":["1styear","2nd year","3rd year"],
        "button functions":[fresher,senior,supersenior],
        text:"You are in the college."
    },
    {
        name:"job",
        "button text":["intern","freshmen","boss"],
        "button functions":[newbie,experience,master],
        text:"You are in the job."
    }

]

function update(location){
button1.innerText=location["button text"][0];
   button2.innerText=location["button text"][1];
   button3.innerText=location["button text"][2];


    button1.onclick=location["button functions"][0];
    button2.onclick=location["button functions"][1];
    button3.onclick=location["button functions"][2];
    text.innerText=location.text;
}


button1.onclick = goSchool;
button2.onclick = goCollege;
button3.onclick = goJob;
function goSchool() {
    update(locations[0]);
}

function goCollege() {
    update(locations[1]);
}

function goJob() {
    update(locations[2]);
}


function child(){
   console.log("you are a child");
}

function adolocence(){

console.log("you are a adolosecnce");
}

function teen(){
//     // console.log("going to Cave")
//     update(locations[2]);
console.log("you are a teen");
}

function fresher(){
console.log("you are in first year");
 }


 function senior(){
console.log("you are in second year");
 }


 function supersenior(){
console.log("you are in 3rd year");   
}


 


 function newbie() {
   console.log("You are an intern.");
 }

 function experience() {
   console.log("You are an experienced employee.");
 }

 function master() {
 console.log("You are the boss.");
 }

// // Initial screen: School
// update(locations[0]);
