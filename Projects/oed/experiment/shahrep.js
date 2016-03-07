$(function() {

  if (window.self == window.top | turk.workerId.length > 0) {
    $('.start-butt').removeClass('hidden');
  };



  var beer_cond = Math.floor(Math.random() * 2);

  $('.start-butt').click(function(event) {
    $('#instructions').addClass('hidden');
    $('#beer_cond-' + beer_cond).removeClass('hidden');
  });

// Resort

  $('#go-to-demos_0').click(function(event) {
    var completed = true;

    if (
      $('#wtp_amt_beach').val() == '$' || $('#wtp_amt_beach').val() == ''
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
      $('#beer_cond-1').addClass('hidden');
      $('#beer_cond-0').addClass('hidden');
      $('#demos').removeClass('hidden');
      $('.error').addClass('hidden');
    }
  });

//Grocery
  $('#go-to-demos_1').click(function(event) {
    var completed = true;

    if (
      $('#wtp_amt_grocery').val() == '$' || $('#wtp_amt_grocery').val() == ''
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
      $('#beer_cond-1').addClass('hidden');
      $('#beer_cond-0').addClass('hidden');
      $('#demos').removeClass('hidden');
      $('.error').addClass('hidden');
    }
  });

//Demos
   $('#go-to-beer').click(function(event) {
    var completed = true;

    if (
      !$("input:radio[name='Income']:checked").val() ||
      !$('#hh_num').val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    window.scrollTo(0,0);
    $('#demos').addClass('hidden');
    $('#beer_drink').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });

//Beer
  $('#go-to-other').click(function(event) {
    var completed = true;

    if (
      !$("input:radio[name='beer_like']:checked").val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    window.scrollTo(0,0);
    $('#beer_drink').addClass('hidden');
    $('#other_demos').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });

//Other
  $('#go-to-comments').click(function(event) {
    $('#other_demos').addClass('hidden');
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


    // Participants will either have a value for wtp_b or wtp_g, depending on which condition they are in.
    // the other value will just be equal to '$'.
    data: {
      wtp_b: [],
      wtp_g: [],
      income: [],
      hh: [], // Refers to number in household
      beer: [], //Refers to how much they like beer (1-5)
      gen: [],
      age: [],
      race_ethn: [],
      engl: [],
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
      var radio_1 = document.getElementsByName("Income");
      var radio_2 = document.getElementsByName("beer_like");
      var radio_3 = document.getElementsByName("gender");
      var radio_4 = document.getElementsByName("english");

      // Loop through radio buttons
      for (i = 0; i < radio_1.length; i++) {
        if (radio_1[i].checked) {
          experiment.data.income.push(radio_1[i].value);
          response_logged = true;
          }
        }

      for (i = 0; i < radio_2.length; i++) {
        if (radio_2[i].checked) {
          experiment.data.beer.push(radio_2[i].value);
          response_logged = true;
          }
        }

      for (i = 0; i < radio_3.length; i++) {
        if (radio_3[i].checked) {
          experiment.data.gen.push(radio_3[i].value);
          response_logged = true;
          }
        }

      for (i = 0; i < radio_4.length; i++) {
        if (radio_4[i].checked) {
          experiment.data.engl.push(radio_4[i].value);
          response_logged = true;
          }
        }
      },
    submit_others: function() {
      var eth = document.getElementsByName("race");

      // Loop through race buttons
      for (i = 0; i < eth.length; i++) {
         if (eth[i].checked) {
             experiment.data.race_ethn.push(eth[i].value);
          }
         }
      experiment.data.wtp_b.push(document.getElementById("wtp_amt_beach").value);
      experiment.data.wtp_g.push(document.getElementById("wtp_amt_grocery").value);
      experiment.data.hh.push(document.getElementById("hh_num").value); // Refers to number in household
      experiment.data.age.push(document.getElementById("age-box").value);
      experiment.data.comments.push(document.getElementById("expcomments").value);
  }
}