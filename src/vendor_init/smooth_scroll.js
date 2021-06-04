var $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/core/ready');
require('jquery/src/attributes');
require('jquery/src/event');
require('jquery/src/effects');
require('jquery/src/manipulation');
require('jquery/src/offset');

$(function(){
  
  // Add smooth scrolling on all nav links
  $(".smooth-scroll a").on('click', function() {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      
      // Store hash
      var target = $(this.hash);
      target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Use jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
              scrollTop: target.offset().top
          }, 700, function(){
            if (!"IntersectionObserver" in window) {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = target;
            }
          });
          return false;
        }
      }
  });
});
