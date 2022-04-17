$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var containerEl = $(".container");
containerEl.addClass("timeblocks");

// Array for the pair of time string and numerical value
var times = [["9AM", 9], ["10AM", 10], ["11AM", 11], ["12PM", 12], ["1PM", 13], ["2PM", 14], ["3PM", 15], ["4PM", 16], ["5PM", 17]];

var timeInterval;

// Add event listener to the buttons
containerEl.on("click", ".btn", saveEvent);

// Function to update color of each time slots whenever hour value changes
function updateBgColor() {
    var currentHour = moment().hour();
    var currentMin;
    var textareaEls = $("textarea");

    clearTimeout(timeInterval);
    
    if(currentHour < 9 || currentHour > 17) {
        return;
    }

    $(textareaEls[currentHour-9-1]).removeClass("present");
    $(textareaEls[currentHour-9-1]).addClass("past");
    $(textareaEls[currentHour-9]).removeClass("future");
    $(textareaEls[currentHour-9]).addClass("present");

    currentMin = moment().minute();
    timeInterval = setTimeout(updateBgColor, 3600000-(currentMin*60000));
}

// Function to save the event to the local storage
function saveEvent(event) {
    // Get the input element of place on where click event fires 
    var siblingEls = $(event.currentTarget).siblings();
    var time = $(siblingEls[0]).text();
    var eventItem = $(siblingEls[1]).val();

    if(eventItem === "") {
        localStorage.removeItem(time);
    }
    else {
        localStorage.setItem(time, eventItem);
    }

    return;
}

// Create a list group with input groups
function makeTimeblocks() {
    var divEl;
    var spanEl;
    var inputEl;
    var buttonEl;
    var iconEl;
    var storedEvent;
    var currentHour;
    var currentMin;

     for(var i=0; i<9; i++){
        // Create div element
        divEl = $("<div>");
        divEl.addClass("container row input-group");
        // Create span element
        spanEl = $("<span>");
        spanEl.addClass("col-2 col-lg-1 text-end hour pt-2");
        spanEl.text(times[i][0]);
        divEl.append(spanEl);
        // Create input element
        inputEl = $("<textarea>");

        currentHour = moment().hour();
        if(times[i][1] < currentHour) {
            inputEl.addClass("col-8 col-lg-10 form-control textarea past");
        }
        else if (times[i][1] === currentHour){
            inputEl.addClass("col-8 col-lg-10 form-control textarea present");
        }
        else {
            inputEl.addClass("col-8 col-lh-10 form-control textarea future");
        }

        storedEvent = localStorage.getItem(times[i][0]);
        if(storedEvent){
            inputEl.val(storedEvent);
        }

        divEl.append(inputEl);
        // Create icon
        iconEl = $("<i>");
        iconEl.addClass("bi bi-save");
        // Create buttone addons
        buttonEl = $("<button>");
        buttonEl.attr("type", "button");
        buttonEl.addClass("col-2 col-lg-1 btn btn-outline-cecondary saveBtn");
        buttonEl.append(iconEl);
        divEl.append(buttonEl);
        containerEl.append(divEl);
    }
    // Start the timer to update 
    currentMin = moment().minute();
    timeInterval = setTimeout(updateBgColor, 3600000-(currentMin*60000));
}

makeTimeblocks();