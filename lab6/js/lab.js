// index.js - purpose and description here
// Author: Violet McNally <vmcnally@ucsc.edu>
// Date: May 1st

// define variables
myTransport = ["Toyota Corolla", "walking", "skipping", "frolicking", "bus"]

// create an object for my main ride
var myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "Midnight Black Metallic",
  year: 2023,
  age: function() {
      return 2023 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
