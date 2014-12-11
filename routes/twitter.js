var searchObj = require('./twitter');
var twitter = require('twitter');
var util = require('util');
var tweetData;
var twit = new twitter({
	consumer_key: 'vlEHCQO4RH70uOMtvge93YJ2U',
	consumer_secret: 'InTTSU2EAJF20dwlGCFSXMI1B4XehnV9yyBK0tOMCx626MvoAb',
	access_token_key: '2921001416-vhRtyO86xljA3n7gV02BMP7oiZ9kslINEK5ndEt',
	access_token_secret: 'Pr2TUSG0MiXvv4QQWUlVBEgTiBxxGkrXUOSfIiHlkveLU'
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