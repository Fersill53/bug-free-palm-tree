// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


const curDay = document.getElementById('currentDay');
const saveBtn = document.getElementById('save');
const todDat = document.getElementById('currentDay');


const nine = document.getElementById('hour-9');
const ten = document.getElementById('hour-10');
const eleven = document.getElementById('hour-11');
const tweleve = document.getElementById('hour-12');
const one = document.getElementById('hour-13');
const two = document.getElementById('hour-14');
const three = document.getElementById('hour-15');
const four = document.getElementById('hour-16');
const five = document.getElementById('hour-17');
const currHR = dayjs().hour()
const date = dayjs();
    $('#currentDay').text(date.format('MMM D, YYYY, HH:mm:ss '));


$('.saveBtn').on('click', function(event) {
    console.log(event)
    console.log($(this).prev().val())
    console.log($(this).parent().attr('id'))
    localStorage.setItem(($(this).parent().attr('id')), ($(this).prev().val()))
});

var nineText = localStorage.getItem('hour-9')
    $('#hour-9 textarea').val(nineText)

var hourNine = 'hour-9'
var newHourNine = hourNine.split('-')
if (currHR < newHourNine[1]) {
    $('#hour-9 textarea').addClass('future')
} else if (currHR > newHourNine[1]) {
    $('#hour-9 textarea').addClass('past')
} else if (currHR === newHourNine) {
    $('#hour-9 textarea').addClass('present')
}
   

var tenText = localStorage.getItem('hour-10')
    $('#hour-10 textarea').val(tenText)
var hourTen = 'hour-10'
var newHourTen = hourTen.split('-')
    if (currHR < newHourTen[1]) {
        $('#hour-10 textarea').addClass('future')
    } else if (currHR > newHourTen[1]) {
        $('#hour-10 textarea').addClass('past')
    } else if (currHR === newHourTen[1]) {
        $('#hour-10 textarea').addClass('present')
    }

    var elevenText = localStorage.getItem('hour-11')
    $('#hour-11 textarea').val(elevenText)
var hourEleven = 'hour-11'
var newHourEleven = hourEleven.split('-')
    if (currHR < newHourEleven[1]) {
        $('#hour-11 textarea').addClass('past')
    }

    var twelveText = localStorage.getItem('hour-12')
    $('#hour-12 textarea').val(twelveText)
var hourTwelve = 'hour-12'
var newHourTwelve = hourTwelve.split('-')
    if (currHR < newHourTwelve[1]) {
        $('#hour-12 textarea').addClass('past')
    }

    var oneText = localStorage.getItem('hour-13')
    $('#hour-13 textarea').val(oneText)
var hourOne = 'hour-13'
var newHourOne = hourOne.split('-')
    if (currHR < newHourOne[1]) {
        $('#hour-13 textarea').addClass('past')
    }

    var twoText = localStorage.getItem('hour-14')
    $('#hour-14 textarea').val(twoText)
var hourTwo = 'hour-14'
var newHourTwo = hourTwo.split('-')
    if (currHR < newHourTwo[1]) {
        $('#hour-14 textarea').addClass('past')
    }

    var threeText = localStorage.getItem('hour-15')
    $('#hour-15 textarea').val(threeText)
var hourThree = 'hour-15'
var newHourThree = hourThree.split('-')
    if (currHR < newHourTen[1]) {
        $('#hour-15 textarea').addClass('past')
    }

    var fourText = localStorage.getItem('hour-16')
    $('#hour-16 textarea').val(fourText)
var hourFour = 'hour-16'
var newHourFour = hourFour.split('-')
    if (currHR < newHourFour[1]) {
        $('#hour-16 textarea').addClass('past')
    }

    var fiveText = localStorage.getItem('hour-17')
    $('#hour-17 textarea').val(fiveText)
var hourFive = 'hour-17'
var newHourFive = hourFive.split('-')
    if (currHR < newHourFive[1]) {
        $('#hour-17 textarea').addClass('past')
    }

   