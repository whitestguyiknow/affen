$(document).ready(function(){
	setTimeout(updateTicker, 3000);
});

function updateTicker(){
	//$(".newsfeed_block").find("p").eq(0).remove();
	if($(".newsfeed_block").find("p").length > 5)
		$(".newsfeed_block").find("p").eq(0).slideUp('slow', function(){
			$(this).remove();
		});
	var next_news_feed = newsfeed_stream.shift();
	$(".newsfeed_block").append("<p>" + next_news_feed + "</p>").find("p:last").hide().slideDown('slow');
	setTimeout(updateTicker, Math.random()*8300+1000);
}