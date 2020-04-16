const m = moment();

//Console log current day
console.log(m.format("dddd, MMMM Do"));
//Display the current day
$("#currentDay").text(m.format("dddd, MMMM Do"));

//Day Planner is aware of current time
//Current hour is highlighted Red
//Future hour is highlighted Green
//Past hour is highlighted Grey

function colorHrChange () {
    var currentTime = moment().hours();
    
    $(".input").each(function () {
        var plannerTime = parseInt($(this).attr("id"));
        //parsing string "id" from document and displaying
        //integer from index.html
        console.log(plannerTime);
        //if current time is greater than planner time 
        //add past (Grey)
        if (currentTime > plannerTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        //else if current time is less than planner time
        //add future (Green)
        } else if (currentTime < plannerTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
        //else add present (Red) for current hour
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

$(document).ready( function() {
    colorHrChange ();
});

var words;

//Function to listen for onClicks for each hour block
$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourBlock = $(this).siblings(".hour").text();

    
    colorHrChange ();
});
