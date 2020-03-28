// const date = moment();

// document.body.append('p')

// p.innerText = date;

console.log(moment());

//Obtaining today's date from moment.js
let  date = moment().format("dddd");
console.log(date);

//selecting the html ID
let dayTag = document.querySelector("#day");

//inserting date into html h2 element
dayTag.append(date);


//inserting time and date into p element
let timeDate = document.querySelector("#timeDate")
timeDate.innerHTML = moment().format("LLL");


// dropdown button toggle
function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }



// let dropdownBtn = document.querySelector('#dropdown');
// dropdownBtn.addEventListener('click', dropdown());

// function dropdown() {
//     dropdownBtn.classList.toggle("show");
//   }
 

//troubleshooting
