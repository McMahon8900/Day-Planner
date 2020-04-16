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
    renderText ();
});

var words;
var hourBlock;

//Function to listen for onClicks for each hour block
$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourBlock = $(this).siblings(".hour").text();
    console.log(hourBlock);
    localStorage.setItem(hourBlock, JSON.stringify(words));

    
    colorHrChange ();
    renderText ();
})



// FUNCTION TO SAVEWORDS IN HOUR BLOCK
function renderText () {
    var nineAM = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(nineAM);
    
    var tenAM = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(tenAM);
    
    var elevenAM = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(elevenAM);
    
    var twelvePM = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(twelvePM);
    
    var onePM = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(onePM);

    var twoPM = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(twoPM);

    var threePM = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(threePM);

    var fourPM = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(fourPM);

    var fivePM = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(fivePM);
}