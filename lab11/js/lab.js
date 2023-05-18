/**
 * Author:    Violet McNally <vmcnally@ucsc.edu>
 * Created:   05.16.2023
 * 
 * (c) Copyright by me!
 **/


buttonEl= $('.minor-section').append('<button id=buttonChalEL> click me.</button>');

  buttonEl= $('#buttonChalEL').click(function(){
    $('#challenge').toggleClass('special');
   alert("alert me motherfucker!")
  });

  $(".highlight-button").click(function(){
    $(this).parent().toggleClass("special");
  })

  $(".sectionbox").append("<button class= 'btn-secondary hilight button'")("<toggle highlight>")