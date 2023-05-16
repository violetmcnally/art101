/**
 * Author:    Violet McNally <vmcnally@ucsc.edu>
 * Created:   05.16.2023
 * 
 * (c) Copyright by Blub Corp.
 **/

var button = document.getElementById('my-button');
button.addEventListener('click', function() {
    inputValue = document.getElementById('my-input').value;
    console.log("You input:", inputValue);
    document.writeln("Here you go!", sortUserName(),"</br>")
});