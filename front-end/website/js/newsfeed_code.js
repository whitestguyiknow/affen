$(document).ready(function(){
	setTimeout(updateTicker, 3000);
});

function updateTicker(){
	//$(".newsfeed_block").find("p").eq(0).remove();
	if($(".newsfeed_block").find("p").length > 5)
		$(".newsfeed_block").find("p").eq(0).remove();
	var next_news_feed = newsfeed_stream.shift();
	$(".newsfeed_block").append("<p>" + next_news_feed + "</p>");
	setTimeout(updateTicker, random()*4300+1000);
}