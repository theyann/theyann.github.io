'use strict';

$(document).ready(function() {
  // Initially hide the podcast section
  $('#podcast').hide();

  // Toggle podcast section visibility when podcast icon is clicked
  $('#podcast-toggle').click(function(e) {
    e.preventDefault();
    $('#podcast').slideToggle(300);
  });
});
