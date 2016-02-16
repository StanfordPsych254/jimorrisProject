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

    experiment.log_response();
    experiment.submit_others();
    experiment.end();

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
var experiment = {


    // The object to be submitted.
    data: {
      wtp_b: [],
      wtp_g: [],
      income: [],
      hh: [],
      comments: [],
    },

    end: function() {
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk
    //(mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    setTimeout(function() { turk.submit(experiment.data) }, 1500);
    },

    // LOG RESPONSE
    log_response: function() {
      var response_logged = false;

      //Array of radio buttons
      var radio = document.getElementsByName("Income");

      // Loop through radio buttons
      for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          experiment.data.income.push(radio[i].value);
          response_logged = true;
          }
        }
      },
    submit_others: function() {
      experiment.data.wtp_b.push(document.getElementById("wtp_amt_beach").value);
      experiment.data.wtp_g.push(document.getElementById("wtp_amt_grocery").value);
      experiment.data.hh.push(document.getElementById("hh_num").value);
      experiment.data.comments.push(document.getElementById("expcomments").value);
  }
}