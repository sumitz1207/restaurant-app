var finances;

var init = function(){	
	finances = new finances();
	
	finances.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + finances.cards.length);

			var source = $("#card-list-template").html();
			var template = finances.compile(source);

			var context = {cards:finances.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
