
$.ajax({
      url: 'https://xkcd.com/info.0.json',
      method: 'GET',
      dataType: 'json',
      success: function(comicObj) {
        // Process the data and add it to the output div
        var outputDiv = $('#output'); // Assuming you have a div with id "output"
    
        // Create a title element
        var title = $('<h2>').text(comicObj.title);
        outputDiv.append(title);
    
        // Create an image element
        var image = $('<img>').attr('src', comicObj.img);
        image.attr('alt', comicObj.alt);
        image.attr('title', comicObj.alt);
        outputDiv.append(image);
      },
      error: function() {
        // Handle error if the request fails
        console.log('Error retrieving comic data');
      }
    });

