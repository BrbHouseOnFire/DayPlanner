
var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};
var bodyContainer = $("#bodyContainer");



// a completely necessary function which wraps any variable in cream filling and tells us about it.
function cf(anything) {
    console.log("The cream filling: " + anything);
    return anything;
}
// for winners
function td() {
    alert("TOUCHDOWN! -takeabreak-");
}






// save button on-clicks
$('.bodycontainer').on('click', '.js-save', function() {
    // get the key and the value
    var key = $(this).data('key');
    var value = $(`#${key}`).val();

    // save it local storage
    dailyTasks[key] = value;
    localStorage.setItem('myDay', JSON.stringify(dailyTasks));
});

function hourCheck() {
    var currentHour = moment().hours();  // 9
    return currentHour;
    // loop through your hours
    // var blockHour = something;
    // if (blockhour < currentHour) {

    // }
    // if (blockhour === currentHour) {
        
    // }
    // if (blockhour > currentHour) {
        
    // }
}

function renderHours() {
    for (var i=9; i<18; i++) {
        var hourTime = hourCheck();
        if (i > 12) {

            






            // default
            j = i-12;
            bodyContainer.append(`<div class="hourcontainer flex jcsb aic" id="hour${j}"></div>`);
            var hour = $(`#hour${j}`);
            hour.append(`<div class="clockspace">${j} pm</div>`);
            hour.append(`<textarea class="textstorage" id="hour-${j}"></textarea>`);
            hour.append(`<button class="savebutton saveb button--s js-save" data-key="hour-${j}">Save</button>`);
        }
        else {








            // default
            bodyContainer.append(`<div class="hourcontainer flex jcsb aic" id="hour${i}"></div>`);
            var hour = $(`#hour${i}`);
            if (i === 12) {
                hour.append(`<div class="clockspace">${i} pm</div>`);
            }
            else {
                hour.append(`<div class="clockspace">${i} am</div>`);
            }
            hour.append(`<textarea class="textstorage" id="hour-${i}"></textarea>`);
            hour.append(`<button class="savebutton saveb button--s js-save" data-key="hour-${i}">Save</button>`);
        }
    }     
}
// repopulate page with stored values
function pullStorage() {
    for (var i=9; i<18; i++) {
        if (i > 12) {
            j = i-12;
            $(`#hour-${j}`).val(dailyTasks[`hour-${j}`]);

        }
        else {
            $(`#hour-${i}`).val(dailyTasks[`hour-${i}`]);

        }
    }
}

function renderStartPage() {
    // create page
    renderHours();
    // pull storage to populate text
    pullStorage();
}


/* init */
/* pull from local storage */
renderStartPage();







