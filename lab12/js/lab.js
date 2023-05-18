/**
 * Author:    Violet McNally <vmcnally@ucsc.edu>
 * Created:   05.18.2023
 * 
 * (c) Copyright by me!
 **/

function sortingHat(str) {
   var len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function () {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "The Sorting Hat has sorted you into " + house + "!";
    document.getElementById("output").innerHTML = newText;
})