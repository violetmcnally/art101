
// Author: Violet McNally <vmcnally@ucsc.edu>
// Created: May 15th
// License: Public Domanin
function sortUserName() {
  var userName = document.getElementById('user-name').value;
    console.log("userName =", userName);
    var sortedName = userName.toLowerCase().split('').sort().join('');
    console.log("userSorted =", userSorted);
    return nameSorted;
  }

var button = document.getElementById('my-button');
button.addEventListener('click', function() {
    inputValue = document.getElementById('my-input').value;
    console.log("You input:", inputValue);
    document.writeln("Here you go!", sortUserName(),"</br>")
});


