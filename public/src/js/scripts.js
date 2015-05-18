(function($) {
	$(document).ready(function () {
		$('.navbar-brand').on('click', function(e) {
			if ($('.navbar-collapse').is(':visible') && $('.navbar-toggle').is(':visible')) {
				$('.navbar-collapse').collapse('toggle');
			}
		});

		$('.navbar a').on('click', function(e) {
			$('.navbar-nav li').removeClass('active');

			if (!$(this).hasClass('navbar-brand')) {
				if ($('.navbar-toggle').is(":visible")) { 
					$('.navbar-collapse').collapse('toggle');
				}
				
				$(this).parent().addClass('active');
			}
		});
	});
})(jQuery);