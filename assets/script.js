

var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM Do, YYYY"));

var currentTime = moment().hour();
console.log(currentTime);

if (localStorage.getItem(".description")) {
  hourlyArray = JSON.parse(localStorage.getItem(".description"));
} else {
  hourlyArray = [];
};




  $(".time-block").each(function () {
  var scheduleTime = $(this).attr("id");
  console.log(scheduleTime);

  if (scheduleTime < currentTime) {
    $(this).children("textarea").addClass("past");
  } else if (scheduleTime == currentTime) {
    $(this).children("textarea").addClass("present");
  } else {
    $(this).children("textarea").addClass("future");
  }
});



$(".saveBtn").on("click", function(){
  //Key
  var key = $(this).parent().attr("id");
  //Value
  var value = $(this).parent().find(".description").val();
  //Save Key and Value to Local Storage
  localStorage.setItem(key,value);
});


// $(".saveBtn").on("click", function () {
//   var hourClicked = $(this).attr("data-hour-to-save");
//   console.log(hourClicked);

//   var userInput = $(this).parent().find(".description").val();
//   console.log("user input", userInput);

//   var currentLocalStorage = JSON.parse(localStorage.getItem("savedInfo")) || [];

//   currentLocalStorage[parseInt(hourClicked) - 9] = userInput;

//   localStorage.setItem("savedInfo", JSON.stringify(currentLocalStorage));
// });

/*
local storage requires a string as datatype
thats not a great way to to interpret data
['whatevers in 9', 'hello world', etc., ' ']

data[1] = 'hello world'

stringify the data
go back into local storage

*/

/**
 * when the page loads we want to read from local storage and populate the time blocks
 * var currentlyInLocal = JSON.parse(localStorage.getItem("savedInfo")) || ['','','','','','','','',''];
 * for (let i = 0; i < currentlyInLocal.lenght; i++) {
 *  var savedForThisHour = currentlyInLKocal[i];
 * $('desired text area).text(savedForThisHour);
 * }
 */
//  if (localStorage.getItem("localHourlyTasks")) {
//   hourlyArray = JSON.parse(localStorage.getItem("localHourlyTasks"));
// } else {
//   hourlyArray = [];
// }