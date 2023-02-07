//change load on first

var ghostDog;

var init = function(){	
	ghostDog = new ghostDog();
	
	ghostDog.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + ghostDog.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:ghostDog.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
