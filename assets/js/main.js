jQuery(function($) {

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    // Create Jump to Top button
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

      // Fade Animation for Scroll to Top button
    $(window).scroll(function() {
    	if ( $(window).scrollTop() > 300 ) {
    		$('a.back-to-top').fadeIn('slow');
    	} else {
    		$('a.back-to-top').fadeOut('slow');
    	}
    });

    // Pleasant scrolling to the Top
    $('a.back-to-top').click(function() {
      $('body, html').animate({scrollTop: 0}, 700);
      return false;
    });

});
