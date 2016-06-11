var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");

var command = process.argv[2];
var title = process.argv[3];

switch(command){
	case "my-tweets":
		tweets();
		break;
	case "spotify-this-song":
		spotifySong();
		break;
	case "movie-this":
		movie();
		break;
	case "do-what-it-says":
		random();
		break;
}


function tweets(){
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
				console.log("------------------------------------------------------");
			}
		}
	});
}

function spotifySong(){
	console.log("down for some tunage");

	if(!title){
		title = "what's my age again";
	}

	spotify.search({type: "track", query: title}, function(error, data){
		if(error){
			console.log(error);
		}
		else{
			console.log("");

			for(i = 0; i < 20; i++){
				console.log((i + 1)  + ".");
				console.log("Artist(s): " + data.tracks.items[i].artists[0].name);
				console.log("Song Name: " + data.tracks.items[i].name);
				console.log("Preview URL: " + data.tracks.items[i].preview_url);
				console.log("Album: " + data.tracks.items[i].album.name);
				console.log("------------------------------------------------------");
			}
		}
	});
}
function movies(){
	console.log("let's go to the movies, shawtay");

	if(!title){
		title = "mr nobody";
	}

	var queryUrl = 'http://www.omdbapi.com/?t=' + title +'&y=&plot=short&tomatoes=true&r=json';
		
	request(queryUrl, function (error, response, body) {

	if(error){
		console.log(error);
	}

	else{
		console.log("Title: " + JSON.parse(body)["Title"]);
		console.log("Year: " + JSON.parse(body)["Year"]);
		console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
		console.log("Country: " + JSON.parse(body)["Country"]);
		console.log("Language: " + JSON.parse(body)["Language"]);
		console.log("Plot: " + JSON.parse(body)["Plot"]);
		console.log("Actors: " + JSON.parse(body)["Actors"]);
		console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
		console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
	}
});


}

function random(){
	console.log("just do what I say");

	fs.readFile("random.txt", "utf8", function(error, data){
		if(error){
			console.log(error);
		}

		data = data.split(",");
		command = data[0];
		title = data[1];

		switch(command){
			case "my-tweets":
			tweets();
			break;
		case "spotify-this-song":
			spotifySong();
			break;
		case "movie-this":
			movie();
			break;
		}
	})	
}