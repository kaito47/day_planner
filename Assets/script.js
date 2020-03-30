console.log(moment());

//obtaining today's date from moment.js
let date = moment().format("dddd");
console.log(date);

//selecting the html ID
let dayTag = document.querySelector("#day");

//inserting date into html h2 element
dayTag.append(date);

//obtaining current hour from moment.js
let currentHour = moment().format("H");
console.log(currentHour);


//inserting time and date into p element
let timeDate = document.querySelector("#timeDate")
timeDate.innerHTML = moment().format("LLL");



//updating text colors
$('textarea').each(function () {
  let textAreaHour = $(this).attr('hour');
  let parsedText = parseInt(textAreaHour);

  if (parsedText < currentHour) {
    $(this).addClass('past');
  }
  if (parsedText > currentHour) {
    $(this).addClass('future');
  }

  if (parsedText == currentHour) {
    $(this).addClass('present');
  }
}
)

//setting up local storage
var savedText7a = localStorage.getItem('text7a');
$('#input7a').append(savedText7a);

var savedText8a = localStorage.getItem('text8a');
$('#input8a').append(savedText8a);

var savedText9a = localStorage.getItem('text9a');
$('#input9a').append(savedText9a);

var savedText10a = localStorage.getItem('text10a');
$('#input10a').append(savedText10a);

var savedText11a = localStorage.getItem('text11a');
$('#input11a').append(savedText11a);

var savedText12p = localStorage.getItem('text12p');
$('#input12p').append(savedText12p);

var savedText1p = localStorage.getItem('text1p');
$('#input1p').append(savedText1p);

var savedText2p = localStorage.getItem('text2p');
$('#input2p').append(savedText2p);

var savedText3p = localStorage.getItem('text3p');
$('#input3p').append(savedText3p);

var savedText4p = localStorage.getItem('text4p');
$('#input4p').append(savedText4p);

var savedText5p = localStorage.getItem('text5p');
$('#input5p').append(savedText5p);


//selecting user input with on click
$('#saveBtn7a').on('click', function (event) {
  event.preventDefault();
  var text7a = $('#input7a').val();
  console.log(text7a);

  localStorage.setItem('text7a', text7a);
  
})

$('#saveBtn8a').on('click', function (event) {
  event.preventDefault();
  var text8a = $('#input8a').val();
  console.log(text8a);

  localStorage.setItem('text8a', text8a);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text9a = $('#input9a').val();
  console.log(text9a);

  localStorage.setItem('text9a', text9a);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text10a = $('#input10a').val();
  console.log(text10a);

  localStorage.setItem('text10a', text10a);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text11a = $('#input11a').val();
  console.log(text11a);

  localStorage.setItem('text11a', text11a);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text12p = $('#input12p').val();
  console.log(text12p);

  localStorage.setItem('text12p', text12p);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text1p = $('#input1p').val();
  console.log(text1p);

  localStorage.setItem('text1p', text1p);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text2p = $('#input2p').val();
  console.log(text2p);

  localStorage.setItem('text2p', text2p);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text3p = $('#input3p').val();
  console.log(text3p);

  localStorage.setItem('text3p', text3p);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text4p = $('#input4p').val();
  console.log(text4p);

  localStorage.setItem('text4p', text4p);
})

$('button').on('click', function (event) {
  event.preventDefault();
  var text5p = $('#input5p').val();
  console.log(text5p);

  localStorage.setItem('text5p', text5p);
})

