var recipes;

var init = function(){	
	recipes = new recipes();
	
	recipes.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + recipes.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:recipes.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
