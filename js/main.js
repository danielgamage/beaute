$(document).ready(function() {
	  // Handler for .ready() called.
	// $( "body" ).mouseenter(function( event ) {
	// 	var mX = event.pageX;
	// 		mY = event.pageY;
	// 	$( "h1" ).animate({marginLeft: (mX/-3.4)});
	// 	$( "h2" ).animate({marginLeft: (mX/-2.1)});
	// 	$( "h3" ).animate({marginLeft: (mX/-1.1)});
	// });
	var source      = $("#quote-template");
	var source_data = source.html();
	var template    = Handlebars.compile(source_data);

	$.getJSON( "quotes.json", function( data ) {
		source.parent().html(template(data));
		$(".quote").click(function(){
			$(this).toggleClass("translated");
		});

		$( "header" ).mousemove(function( event ) {
			var mX = event.pageX;
				mY = event.pageY;
			$( "h1" ).css({
				"margin-left": (mX/-2.4)
			});
			$( "h2" ).css({
				"margin-left": (mX/-1.8)
			});
			$( "h3" ).css({
				"margin-left": (mX/-1.2)
			});
		});
	});
});