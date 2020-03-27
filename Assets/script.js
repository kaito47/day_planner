// const date = moment();

// document.body.append('p')

// p.innerText = date;

console.log(moment());

//Obtaining today's date from moment.js
let  date = moment().format("dddd");
console.log(date);
//selecting the html ID
let dayTag = document.querySelector("day");
//inserting date into html h1 element
dayTag.innerHTML = "Hola"; 

document.getElementById("day").innerHTML = "Hi there!"; 