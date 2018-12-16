(function($) { // Begin jQuery
  $(function() { // DOM ready

    function sparkles(){
      var totalSparkles = 200;

      if (window.matchMedia('(max-width: 730px)').matches) {
         totalSparkles = 60;
       } else {
         totalSparkles = 200;
       }

      var sparkleDelayRange = 20;

      var sparkle = $('<div class="sparkle"></div>');

      for (var i = 0; i < totalSparkles; i++) {
        $('.sparkles').append('<div class="sparkle"></div>');
      }


      $('.sparkles').find('.sparkle').each(function(){

        // Cache the this selector
        var $this = $(this);

        // Apply the new styles
        $this.css({
          'top' : (Math.random() * 100) + '%',
          'left' : (Math.random() * 100) + '%',

          '-webkit-animation-delay' : (Math.random() * sparkleDelayRange) + 's',
          '-moz-animation-delay' : (Math.random() * sparkleDelayRange) + 's',
          '-ms-animation-delay' : (Math.random() * sparkleDelayRange) + 's',
          'animation-delay' : (Math.random() * sparkleDelayRange) + 's'
        });


      });

    }

    sparkles();


  }); // end DOM ready
})(jQuery); // end jQuery
