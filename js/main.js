$(document).ready(function() {
	var source      = $("#quote-template");
	var source_data = source.html();
	var template    = Handlebars.compile(source_data);

	$.getJSON( "quotes.json", function( data ) {
		source.parent().html(template(data));
		$(".quote").addClass("default");
		$(".quote").children('[lang="en"]').hide();
		$(".quote").click(function(){
			$(this).toggleClass("translated").children('[lang="en"]').toggle(100);
		});
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