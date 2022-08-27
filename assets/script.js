// Defining the variable for today's date and setting it 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

// Defining variables for the time-blocks
var currentHour = moment().format('h:mm:ss a');
console.log(currentHour);

var hour = moment().hours();
console.log(hour)


function initPage() {
}

function background () {
    $(".colorcode").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
    
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function(){
    initPage()
    background()
})


$(".saveBtn").on("click", function(){
    userInput = $(this).siblings("#fc9").val().trim();
    console.log(userInput);
});

// setting local storage for all my schedule entry's
var scheduleEntry9a= document.getElementById("fc9");
localStorage.setItem("9am schedule ", scheduleEntry.value);

var scheduleEntry10a= document.getElementById("fc10");
localStorage.setItem("10am schedule ", scheduleEntry.value);

var scheduleEntry11a= document.getElementById("fc11");
localStorage.setItem("11am schedule ", scheduleEntry.value);

var scheduleEntry12n= document.getElementById("fc12");
localStorage.setItem("12pm schedule ", scheduleEntry.value);

var scheduleEntry1p= document.getElementById("fc13");
localStorage.setItem("1pm schedule ", scheduleEntry.value);

var scheduleEntry2p= document.getElementById("fc14");
localStorage.setItem("2pm schedule ", scheduleEntry.value);

var scheduleEntry3p= document.getElementById("fc15");
localStorage.setItem("3pm schedule ", scheduleEntry.value);

var scheduleEntry4p= document.getElementById("fc16");
localStorage.setItem("4pm schedule ", scheduleEntry.value);

var scheduleEntry5p= document.getElementById("fc17");
localStorage.setItem("5pm schedule ", scheduleEntry.value);