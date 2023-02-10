var employees;

var init = function(){	
	employees = new employees();
	
	employees.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + employees.cards.length);

			var source = $("#card-list-template").html();
			var template = employees.compile(source);

			var context = {cards:employees.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
