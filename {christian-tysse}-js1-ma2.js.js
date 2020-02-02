// question 1

function expression(somefuncy){
    somefuncy();
}
const myFunctionExpression = function() {
    console.log("Christian Tysse")
}
expression(myFunctionExpression);

// question 2
const buttons = document.querySelector(".btn");
function clicked(){
    console.log("i was clicked");
};

buttons.addEventListener("click", clicked);

//question 3

const key = document.querySelector("#firstName");

function myFunction(event) {
    console.log("value: ", event.target.value);
}

key.addEventListener("keyup", myFunction);

// question 4

const mousOver = document.querySelector("button");

function hovering() {
    mousOver.classList.add("hover");
    console.dir(mousOver.classList);
}
mousOver.addEventListener("mouseover", hovering);

// questin 5
/* changed the name from dog to horse because when i loged the buttons the hover
woud not show in console but i think this is right */
const mousOut = document.querySelector("[data-animal='horse']");

function out() {
    mousOut.classList.remove("hover");
    console.dir(mousOut.classList);
}
mousOut.addEventListener("mouseout", out);

// question 6

const animal = document.querySelectorAll("li");

for (let i = 0; i < animal.length; i++) {
    animal[i].addEventListener("mouseover", list);
}

function list(event) {
    console.log(event.target.dataset.animal);
}
//question 7
const animals = "cow";
switch(animals){
    case "cat":
    console.log("meow");
    break;
    case "cow":
    console.log("moo");
    break;
    case "bird":
    console.log("tweet");
    break
    default:
        console.log("harrumph")
}

//question 8

const sheep = ["Malcolm", "Anders", "Marie"];

 sheep.forEach(function(sheep){
     console.log(sheep)
 });

 // question 9
 function logTime(){
     console.log("hello");

     if (counter === 5) {
         clearInterval(intervalId);
     }
     counter++;
 }
 let counter = 0;
 const intervalId = setInterval(logTime, 500);

 // question 10

const divUpdate = document.querySelector(".container");

function updateDiv() {
    divUpdate.innerHTML = ("text updated");
}
setTimeout(updateDiv, 2000);