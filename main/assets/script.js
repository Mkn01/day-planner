// today = moment();
// currentTime = IdentifyCurrentTime();
// let dayInfoArray = [];
// let savedEventInfoArray = [];

// // Current Day displayed in header
// function displayCurrentDayInfo() {
//   $("#currentDay").text(moment().format("dddd, MMMM Do"));
//   updateCurrentTimeTimer();
//   colourCodeTextArea();
//   populateInfoForSavedEvents();
// }

// // current time
// function IdentifyCurrentTime() {
//   currentHour = today.format("HH");
//   return currentHour;
// }
// //check current time
// function updateCurrentTimeTimer() {
//   setInterval(IdentifyCurrentTime, 60000);
//   colourCodeInputBox();
// }
// // colour code time blocks
// function colourCodeInputBox() {
//   $(".row").each(function () {
//     let blockTime = $(this).children(".hour").attr("data-time");
//     if (blockTime == currentTime) {
//       $(this).children("textarea").addClass("present");
//     } else if (blockTime < currentTime) {
//       $(this).children("textarea").addClass("past");
//     } else {
//       $(this).children("textarea").addClass("future");
//     }
//   });
// }
// //add saved input to relevant input box

// function addSavedInfo() {
//   if (localStorage.getItem("eventInformation") !== null) {
//     savedEventInfoArray = JSON.parse(localStorage.getItem("eventInformation"));
//     $.each(savedEventInfoArray, function () {
//       timeBlock = this.timeBlockID;
//       eventInfo = this.eventInfoText;
//       timeBlockElement = $(`.hour[data-time="${timeBlock}"]`);
//       timeBlockElement.siblings("textarea").val(eventInfo);
//     });
//   } else {
//     return;
//   }
// }

// //save input info to local storage
// function saveEvent(event) {
//   let timeBlockID = $(event.currentTarget).siblings(".hour").attr("data-time");
//   let eventInfoText = $(event.currentTarget).siblings("textarea").val();

//   if (localStorage.getItem("eventInformation") !== null) {
//     dayInfoArray = JSON.parse(localStorage.getItem("eventInformation"));

//     // remove info previously saved

//     function removePreviouslySavedInfo(item) {
//       if (item.timeBlockID !== timeBlockID) {
//         return true;
//       }
//       return false;
//     }
//     let cleansedEventInfoArray = savedEventInfoArray.filter(
//       removePreviouslySavedInfo
//     );
//     let newEventInfoObject = {
//       timeBlockID,
//       eventInfoText,
//     };
//     cleansedEventInfoArray.push(newEventInfoObject);
//     let newEventInfoString = JSON.stringify(cleansedEventInfoArray);
//     localStorage.setItem("eventInformation", newEventInfoString);

//     // destroy object text
//     $(event.currentTarget).siblings("textarea").val(" ");
//     //populate event info back onto page after 1.5secs
//     setTimeout(() => {
//       populateInfoForSavedEvents();
//     }, 1500);
//   } else {
//     let eventInfoObject = {
//       timeBlockID,
//       eventInfoText,
//     };

//     eventInfoArray.push(eventInfoObject);
//     let eventInfoString = JSON.stringify(eventInfoArray);
//     localStorage.setItem("eventInformation", eventInfoString);

//     // destroy object text
//     $(event.target).siblings("textarea").val(" ");
//     //populate event info back onto page after 1.5secs
//     setTimeout(() => {
//       populateInfoForSavedEvents();
//     }, 1500);
//   }
// }

// $("document").ready(displayCurrentDayInfo);
// $(".container").on("click", "button", saveEvent);
