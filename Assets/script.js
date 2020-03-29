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

//get stored objects
setText();

// let input6a = $('.input6a');
//function for getting stored object
// function renderLastRegistered() {
//   var userInput6a = localStorage.getItem("text6a");
//   $('.input6a').innerHTML = userInput6a;
// }
function setText() {
  var savedText = localStorage.getItem('text6a');
  $('#input6a').append(savedText);
  
}
//selecting html button
// let saveBtn = document.querySelectorAll('.saveBtn');


//selecting user input with on click
$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  var text6a = $('#input6a').val();
  console.log(text6a);

  localStorage.setItem('text6a', text6a);
  setText();
})

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput7a = $('.input7a').val();
//   console.log(userInput7a);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput8a = $('.input8a').val();
//   console.log(userInput8a);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput9a = $('.input9a').val();
//   console.log(userInput9a);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput10a = $('.input10a').val();
//   console.log(userInput10a);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput11a = $('.input11a').val();
//   console.log(userInput11a);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput12p = $('.input12p').val();
//   console.log(userInput12p);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput1p = $('.input1p').val();
//   console.log(userInput1p);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput2p = $('.input2p').val();
//   console.log(userInput2p);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput3p = $('.input3p').val();
//   console.log(userInput3p);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput4p = $('.input4p').val();
//   console.log(userInput4p);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput5p = $('.input5p').val();
//   console.log(userInput5p);
// })

// $('button').on('click', function(event) {
//   event.preventDefault();
//   var userInput6p = $('.input6p').val();
//   console.log(userInput6p);
// });