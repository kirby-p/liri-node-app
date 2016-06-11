var keys = require("./keys.js");

var command = process.argv[2];

if(command == "my-tweets"){
	console.log("tweet tweet");
	console.log(keys.twitterKeys.consumer_key);
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