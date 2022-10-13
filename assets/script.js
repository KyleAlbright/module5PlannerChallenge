var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM Do, YYYY"));

var currentTime = moment().hour();
console.log(currentTime);

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

$(".saveBtn").on("click", function () {

   

  var userInput = $(this).parent().find(".description").val();

  localStorage.setItem("savedInfo", userInput);

  localStorage.getItem("savedInfo")
});
