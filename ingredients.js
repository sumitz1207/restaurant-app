var ingredients;

var init = function(){	
	ingredients = new ingredients();
	
	ingredients.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + ingredients.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:ingredients.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
