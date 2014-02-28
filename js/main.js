$(document).ready(function() {
	var source      = $("#quote-template");
	var source_data = source.html();
	var template    = Handlebars.compile(source_data);

	var quoteToggle = function() {
		var quote = $(".quote");

		quote.addClass("default");
		quote.children('[lang="en"]').hide();
		quote.click(function(){
			$(this).toggleClass("translated").children('[lang="en"]').toggle(100);
		});
	}

	$.getJSON( "quotes.json", function( data ) {
		source.parent().html(template(data));
		quoteToggle(); // once the quotes are loaded
	});

	$( window ).mousemove(function( event ) {
		var mX = event.pageX;
			mY = event.pageY;
		$( "#mouse .h1" ).css({
			"margin-left": (mX/20)
		});
		$( "#mouse .h2" ).css({
			"margin-left": (mX/17)
		});
		$( "#mouse .h3" ).css({
			"margin-left": (mX/15)
		});
		$( "#mouse .h4" ).css({
			"margin-left": (mX/10)
		});
		$( "#mouse" ).css({
			"margin-top": (mY/15)
		});
	});
});