

var menus;

var init = function(){	
	menus = new menus();
	
	menus.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + menus.cards.length);

			var source = $("#card-list-template").html();
			var template = menus.compile(source);

			var context = {cards:menus.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
