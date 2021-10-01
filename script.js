// NOUNS 
// currentDayTime => variable for the current day using moment function ??? - formatting it ???
// calEl = jQuery selector for <p id="currentDay" class="lead"></p> - why to point to and elment on the page
	//var calEl = $('#currentDay');
// timeBlockEl = jquery Selector for the div on the page where the clandar elments will go
	// <div class="container">
	//var timeBlockEl = $('.container');

// VERBS (functions)
// displayCurrentDay
	//use moment and assign the value of the day to a vriable
	//append that value to the page - calEl
// generateTimeBlocks
	//call on function that will retrieve infomration about the TODO iteams as they are stored in tlocal storage
	//it will generate a listing of cards for 9am -5pm
		//each timeblock is color coded to indicate whether it is in the past, present, or future
// retriveTodos
	//var  todos = JSON.parse(localStorage.getItem("todos"));
 
	
// ---------------------------------------------------------------------------------------------------------------------------
// Leo's Psuedo Code:


	// Used today as a moment
	// currentDayTime is linked to the html in the <p>tag that we are going to use to place the live clock
	// CurrentDaytime displays a text with a format of the live count as today
	// setInterval is what is making the time live count by updating every 1000 milliseconds
	$(document).ready(function () {
	  var today = moment();
	  var currentDayTime = $("#currentDayTime");
	
	  currentDayTime.text(today.format("MMM DD, YYYY HH:mm:ss A")) 


console.log(today)

setInterval(function(){
	var today = moment();
	var currentDayTime = $("#currentDayTime");
	currentDayTime.html(today.format("MMM DD, YYYY HH:mm:ss A"))
}, 1000)
});
// ------------------------------------------------------------------------------------------------------------
// 
// creating button for 'save button' and making it clickable

$('.saveBtn').on('click', function(){

	var value = $(this).siblings(".form-control").val()
	var key = $(this).parent().attr('id')
	localStorage.setItem(key, value)
	
	console.log(key, value)
} )
// consle.log is coming out as undefined????
// trying to save onto localStorage
$("#9am .form-control").val(localStorage.getItem("9am"));
$("#10am .form-control").val(localStorage.getItem("10am"));
$("#11am .form-control").val(localStorage.getItem("11am"));
$("#12pm .form-control").val(localStorage.getItem("12pm"));
$("#1pm .form-control").val(localStorage.getItem("1pm"));
$("#2pm .form-control").val(localStorage.getItem("2pm"));
$("#3pm .form-control").val(localStorage.getItem("3pm"));
$("#4pm .form-control").val(localStorage.getItem("4pm"));
$("#5pm .form-control").val(localStorage.getItem("5pm"));
$("#6pm .form-control").val(localStorage.getItem("6pm"));
$("#7pm .form-control").val(localStorage.getItem("7pm"));
$("#8pm .form-control").val(localStorage.getItem("8pm"));

$(function(){
	var timeBlockEl = $(".timeBlock");

for(var i = 0; i<timeBlockEl.length; i++) {
var getValue = timeBlockEl[i].textContent;

console.log(timeBlockEl)
console.log(getValue)


var newMoment = moment(getValue, "HH:mm:ss")
}

console.log(newMoment)


}
)
