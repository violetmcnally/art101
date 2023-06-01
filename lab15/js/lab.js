function getAPOD() {
      // Create an XMLHttpRequest object
      var xhr = new XMLHttpRequest();
    
      // NASA API URL
      var url = "https://api.nasa.gov/planetary/apod";
    
      // API Key
      var apiKey = "sRYiYvn3LxJjwtfI2SpaRtKuA9zZ38eMvEl8He9m";
    
      // Add event listener to handle the response
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          // Parse the response
          var response = JSON.parse(this.responseText);
    
          // Get the output div element
          var outputDiv = document.getElementById("output");
    
          // Set the HTML content of the output div with the 'url' property from the response
          outputDiv.innerHTML = response.title;
          outputDiv.innerHTML = response.date;
          outputDiv.innerHTML = response.url;
          outputDiv.innerHTML = response.explanation;
    
        }
      };
    
      // Open the XMLHttpRequest with GET method and API URL with query parameters
      xhr.open("GET", url + "?api_key=" + apiKey, true);
    
      // Send the request
      xhr.send();
    }
    
    // Using the core $.ajax() method
    $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.nasa.gov/planetary/apod",
      // The data to send (will be converted to a query string)
      data: { 
              // here is where any data required by the api 
              //   goes (check the api docs)
              api_key: "sRYiYvn3LxJjwtfI2SpaRtKuA9zZ38eMvEl8He9m",
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log(data);
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) { 
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
    })