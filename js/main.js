var source      = $("#quote-template");
var source_data = source.html();
var template    = Handlebars.compile(source_data);

var context = {
	quotes: [
		{
			author: 'Brittany Pietrzykowski',
			lang: 'es',
			content: {
				original: 'La belleza no es solo la apariencia física, sino también nuestros sentimientos y virtudes como persona.',
				translated: 'Beauty is not only physical appearance, but also our feelings and virtues as a person.',
			}
		},
		{
			author: 'Roxanne Zhang',
			lang: 'zh',
			content: {
				original: '像是落红千秋载，飞沙一瞬间。只消她回眸轻巧扬起嘴角，便不负了佛前乞求的五百年。',
				translated: 'It\'s a strike in one moment which lasts for thousands of years. When she turns around and smiles at you, it\'s worth every second you pray before Buddha.',
			}
		},
		{
			author: 'Samantha Renner',
			lang: 'ja',
			content: {
				original: '美しさっていうのは、普通のものなかで珍しい事を見付けてくるの。',
				translated: 'Beauty is the discovery of rarity in the ordinary.'
			}
		}
	]
};

var html    = template(context);

source.parent().html(html);

$( "body" ).mousemove(function( event ) {
	var mX = event.pageX;
		mY = event.pageY;
	$( "h1" ).css("margin-left", (mX/-3.4));
	$( "h2" ).css("margin-left", (mX/-2.1));
	$( "h3" ).css("margin-left", (mX/-1.1));
});

$(".quote").click(function(){
	$(this).toggleClass("translated");
});