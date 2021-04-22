console.log("Hello, Mandell...I am loaded");

//=====================DEPENDENCIES

//current day & time
//create & place using moment.js
var currentDay = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT")
$("currentTime").append("#currentTime")

//hour of the day

//save button

//ability to scroll

//input area

//local storage

//color changing based on time of the day

//=====================STARTING DATA

//CONTAINER

//color coded time blocks
    //is the current time < > or = to each of the time slots?

//hours presented in 9-5 format

//====================USER INTERACTIONS

// WHEN I open the planner
    //I am presented with a calendar
    //the current day is displayed at the top
    //the planner displays a schedule of events


// WHEN I scroll down
    //I am presented with timeblocks for standard business hours
    //timeblocks are color coded for past, present, or future


// WHEN I click into a timeblock
    //I can enter an event


// WHEN I click the save button for that timeblock
    //the text for that event is saved in local storage


//=====================INITIALIZATION








