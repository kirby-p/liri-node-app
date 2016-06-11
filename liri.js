var keys = require("./keys.js");
var twitter = require("twitter");

var command = process.argv[2];

if(command == "my-tweets"){
	console.log("tweet tweet");
	var client = new twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret,
	}); 

	client.get("statuses/user_timeline", function(error, tweets, response){
		if(error){
			console.log(error);
		}
		else{
			console.log("");
			for(i = 0; i < 20; i++){
				console.log(tweets[i].text);
				console.log(tweets[i].created_at);
				console.log("");
			}
				// console.log(tweets.text);

		}
	});
	// console.log(keys.twitterKeys.consumer_key);
}
else if(command == "spotify-this-song"){
	console.log("down for some tunage");
}
else if(command == "movie-this"){
	console.log("let's go to the movies, shawtay");
}
else if(command == "do-what-it-says"){
	console.log("just do what I say");
}
else{
	console.log("try again");
}