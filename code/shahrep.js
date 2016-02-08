$(function() {
  var beer_cond = Math.floor(Math.random() * 2);

  $('.start-butt').click(function(event) {
    $('#instructions').addClass('hidden');
    $('#beer_cond-' + beer_cond).removeClass('hidden');
  });

// Resort
  $('#go-to-demos_0').click(function(event) {
    $('#beer_cond-1').addClass('hidden');
    $('#beer_cond-0').addClass('hidden');
    $('#demos').removeClass('hidden');
  });

//Grocery
  $('#go-to-demos_1').click(function(event) {
    $('#beer_cond-1').addClass('hidden');
    $('#beer_cond-0').addClass('hidden');
    $('#demos').removeClass('hidden');
  });

//Demos
  $('#go-to-comments').click(function(event) {
    $('#demos').addClass('hidden');
    $('#comments').removeClass('hidden');
  });

//Comments
  $('#go-to-finish').click(function(event) {
    $('#comments').addClass('hidden');
    $('#finished').removeClass('hidden');
  });
})
