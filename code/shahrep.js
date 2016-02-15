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

function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

//Work on This!!
jsPsych.init({
    display_element: $('#jspsych_target'),
    show_progress_bar: true,
    experiment_structure: the_experiment,
    on_finish: function() {
        var alldata = jsPsych.data.getData();
        alldata.push({condition: condition})
        alldata.push({wtp: wtp_amt})  
        alldata.push({income: Income})  
        alldata.push({HH: hh_num})
        alldata.push({Comments: expcomments})    
        turk.submit(alldata)
        jsPsych.data.displayData('json')
    }
  });