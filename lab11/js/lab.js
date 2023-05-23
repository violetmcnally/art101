/**
 * Author:    Violet McNally <vmcnally@ucsc.edu>
 * Created:   05.16.2023
 * 
 * (c) Copyright by me!
 **/


buttonEl = $('.challenge, .problems, .results').append('<button id=button>click me</button>');

$(buttonEl).click(function () {
  $(this).toggleClass('special');
  alert("{alert me motherfucker}");
})
