const m = moment();



//Display the current day
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

