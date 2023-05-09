//Author


//creating variables
var oldEl = document.getElementById("output");
var new1El = document.createElement("p");
var new2El = document.createElement("h")

oldEl.appendChild(new1El);
new1El.id = "Hot Rod";
new1El.innerHTML = "Vi Was Here.....";
new1El.style.fontSize = "30pt";

oldEl.appendChild(new2El);
new2El.id = "rawr";
new2El.innerHTML = "Im going to eat you alive!";
new2El.style.fontSize = "40pt";
