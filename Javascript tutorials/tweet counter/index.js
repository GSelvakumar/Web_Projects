var tweet = prompt("Compose your tweet: ");
var tweetUnder140 = tweet.slice(0, 140);
var tweetCount = tweetUnder140.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");