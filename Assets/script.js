
//$(function () {

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
} else if (currHR == newHourNine) {
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
    } else if (currHR == newHourTen[1]) {
        $('#hour-10 textarea').addClass('present')
    }

    var elevenText = localStorage.getItem('hour-11')
    $('#hour-11 textarea').val(elevenText)
var hourEleven = 'hour-11'
var newHourEleven = hourEleven.split('-')
    if (currHR < newHourEleven[1]) {
        $('#hour-11 textarea').addClass('future')
    } else if (currHR > newHourEleven[1]) {
        $('#hour-11 textarea').addClass('past')
    } else if (currHR == newHourEleven[1]) {
        $('#hour-11 textarea').addClass('present')
    }

    var twelveText = localStorage.getItem('hour-12')
    $('#hour-12 textarea').val(twelveText)
var hourTwelve = 'hour-12'
var newHourTwelve = hourTwelve.split('-')
    if (currHR < newHourTwelve[1]) {
        $('#hour-12 textarea').addClass('future')
    } else if (currHR > newHourTwelve[1]) {
        $('#hour-12 textarea').addClass('past')
    } else if (currHR == newHourTwelve[1]) {
        $('#hour-12 textarea').addClass('current')
    }

    var oneText = localStorage.getItem('hour-13')
    $('#hour-13 textarea').val(oneText)
var hourOne = 'hour-13'
var newHourOne = hourOne.split('-')
    if (currHR < newHourOne[1]) {
        $('#hour-13 textarea').addClass('future')
    } else if (currHR > newHourOne[1]) {
        $('#hour-13 textarea').addClass('past')
    } else if (currHR == newHourOne[1]) {
        $('#hour-13 textarea').addClass('current')
    }

    var twoText = localStorage.getItem('hour-14')
    $('#hour-14 textarea').val(twoText)
var hourTwo = 'hour-14'
var newHourTwo = hourTwo.split('-')
    if (currHR < newHourTwo[1]) {
        $('#hour-14 textarea').addClass('future')
    } else if (currHR > newHourTw0[1]) {
        $('#hour-14 textarea').addClass('past')
    } else if (currHR == newHourTwo[1]) {
        $('#hour-14 textarea').addClass('current')
    }

    var threeText = localStorage.getItem('hour-15')
    $('#hour-15 textarea').val(threeText)
var hourThree = 'hour-15'
var newHourThree = hourThree.split('-')
    if (currHR < newHourThree[1]) {
        $('#hour-15 textarea').addClass('future')
    } else if (currHR > newHourThree[1]) {
        $('#hour-15 textarea').addClass('past')
    } else if (currHR == newHourThree[1]) {
        $('#hour-15 textarea').addClass('current')
    }

    var fourText = localStorage.getItem('hour-16')
    $('#hour-16 textarea').val(fourText)
var hourFour = 'hour-16'
var newHourFour = hourFour.split('-')
    if (currHR < newHourFour[1]) {
        $('#hour-16 textarea').addClass('future')
    } else if (currHR > newHourFour[1]) {
        $('#hour-16 textarea').addClass('past')
    } else if (currHR == newHourFour[1]) {
        $('#hour-16 textarea').addClass('current')
    }

    var fiveText = localStorage.getItem('hour-17')
    $('#hour-17 textarea').val(fiveText)
var hourFive = 'hour-17'
var newHourFive = hourFive.split('-')
    if (currHR < newHourFive[1]) {
        $('#hour-17 textarea').addClass('future')
    } else if (currHR > newHourFive[1]) {
        $('#hour-17 textarea').addClass('past')
    } else if (currHR == newHourFive[1]) {
        $('#hour-17 textarea').addClass('current')
    }

   