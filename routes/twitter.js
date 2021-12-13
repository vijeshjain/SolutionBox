var searchObj = require('./twitter');
var twitter = require('twitter');
var util = require('util');
var tweetData;
var twit = new twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: ''
});

var count = 0;

twit.search('nodejs OR #node', function(data){
		//console.log(util.inspect(data));
		exports.tweetData = util.inspect(data);
		//console.log("Tweet Data is :" + exports.tweetData);
});

exports.twitteranswers = function(req, res){

   res.render('tweet', {tweetData: searchObj.tweetData}, function(err, result){
                if(!err)
                {
                    res.end(result);
                }
                else
                {
                    res.end('An error occurred');
                    console.log(err);
                }
            });
}
