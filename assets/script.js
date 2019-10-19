
var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};
var bodyContainer = $("#bodyContainer");
var timeCheck ="";



// a completely necessary function which wraps any variable in cream filling and tells us about it.
function cf(anything) {
    // for debugging
    console.log("The cream filling: " + anything);
    return anything;
}
// for winners
function td() {
    alert("TOUCHDOWN! -takeabreak-");
}


// save button on-clicks
$('.bodycontainer').on('click', '.js-save', function() {
    // get the key and the value from the dynamically created button
    var key = $(this).data('key');
    var value = $(`#${key}`).val();

    dailyTasks[key] = value;
    // save it to local storage
    localStorage.setItem('myDay', JSON.stringify(dailyTasks));
});
function getTime() {
    return now = moment().format("MMM do YYYY");
    // example: Sep 2nd 19
}
function setTimestamp() {
    var now = getTime();
    $("#dateStamp").text(now);
}

function hourCheck() {
    var currentHour = moment().hours();
    return currentHour;
}

function renderHours() {
    // run through each hour slot
    for (var i=9; i<18; i++) {
        // check current hour
        var hourTime = hourCheck();
        // when generating hour blocks, check if block is before or after current time.
        if (hourTime > i) {
            timeCheck = "before";
        }
        if (hourTime === i) {
            timeCheck = "current";
        }
        if (hourTime < i) {
            timeCheck = "after";
        }
        // slight adjustment case for 1pm-5pm
        if (i > 12) {
            // adjust ID's & variables to 12 hour time instead of 24 hour
            j = i-12;
            bodyContainer.append(`<div class="hourcontainer hourcontainer${timeCheck} flex jcsb aic" id="hour${j}"></div>`);
            var hour = $(`#hour${j}`);
            hour.append(`<div class="clockspace clockspace${timeCheck}">${j} pm</div>`);
            hour.append(`<textarea class="textstorage" id="hour-${j}"></textarea>`);
            hour.append(`<button class="savebutton saveb${timeCheck} button--s${timeCheck} js-save" data-key="hour-${j}">Save</button>`);
        }
        else {
            // regular 12 hour time
            bodyContainer.append(`<div class="hourcontainer hourcontainer${timeCheck} flex jcsb aic" id="hour${i}"></div>`);
            var hour = $(`#hour${i}`);
            if (i === 12) {
                hour.append(`<div class="clockspace clockspace${timeCheck}">${i} pm</div>`);
            }
            else {
                hour.append(`<div class="clockspace clockspace${timeCheck}">${i} am</div>`);
            }
            hour.append(`<textarea class="textstorage" id="hour-${i}"></textarea>`);
            hour.append(`<button class="savebutton saveb${timeCheck} button--s${timeCheck} js-save" data-key="hour-${i}">Save</button>`);
        }
    }     
}

// populate page with stored values
function pullStorage() {
    // for each hour block
    for (var i=9; i<18; i++) {
        // slight adjustment for 1pm-5pm cases
        if (i > 12) {
            j = i-12;
            $(`#hour-${j}`).val(dailyTasks[`hour-${j}`]);
        }
        // regular 12 hour time
        else {
            $(`#hour-${i}`).val(dailyTasks[`hour-${i}`]);
        }
    }
}

function renderStartPage() {
    // create timestamp on top of page
    setTimestamp();
    // create page body
    renderHours();
    // pull storage to populate text
    pullStorage();
}


/* init */
/* generate the page */
renderStartPage();







