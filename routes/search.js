var http = require("http");
var stackexchange = require('stackexchange');

var searchObj = require('./search');
var htmlToText = require('html-to-text');

exports.viewsearch = function(req, res){

    if (req != "") {

        var options = {
            version: 2.2
        };
        var context = new stackexchange(options);

        var qfilter = {
            q : req.param("q"),
            filter: '!mZgcbHtPxE',
            sort:'relevance',
            site:'stackoverflow',
            accepted: 'True'
        }



context.search.excerpts(qfilter, function(err, results) {
            if (err) throw err;
 
              var text = [];
              var score = [];
              var questionId = [];
              var answercount = 0;
              var title = [];
              var tags = [];
              var scoreOld = [];

              for(var i=0; i<results.items.length; i++)
              {
              scoreOld.push(results.items[i].score);
              }

              results.items.sort(function(obj1, obj2) {
              // Ascending: first age less than the previous
              return obj2.score - obj1.score;
              });

             for( var i=0; i<results.items.length; i++)
             {
                title[i]= results.items[i].title;
                questionId[i]= results.items[i].question_id;
                score[i]= results.items[i].score;
                answercount = answercount + results.items[i].answer_count;
                text[i] = results.items[i].body;
                tags[i] = results.items[i].tags;
            }
            exports.questionId = questionId;
            exports.text1 = text;
            exports.score = score;
            exports.scoreOld = scoreOld;
            exports.answercount = answercount;
            exports.title1 = title;
            exports.tags = tags;
            console.log(tags);


           res.render('results', {results: results, title: title, text: text, q: req.param("q") }, function(err, result){
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
        
        });
      }        
    }

exports.displaysearch = function(req, res){

    res.render('search');
}

exports.analysis = function(req, res){
 
            
            res.render('analysis', {title: searchObj.title1, score: searchObj.score, scoreOld: exports.scoreOld}, function(err, result){
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


exports.allanswers = function(req, res){

    if (req != "") {
      var obj = [];
        var acceptedbody = [];

 obj.push(req.param('qid'));
console.log(obj);
        var options = {
            version: 2.2
        };
        var context = new stackexchange(options);

             var ansfilter = {
            ids : obj,
            filter: '!bJjknYumlHWZ)D',
            is_accepted: 'True'
             }


            context.questions.answers(ansfilter, function(err, results) {
                        if (err) throw err;
                          var ans = [];
                          var accepted = [];
                          var value = true;

                          results.items.sort(function(obj1, obj2) {
                            // Ascending: first age less than the previous
                            return obj2.score - obj1.score;
                            });

                         for( var i=0; i<results.items.length; i++)
                         {
                             ans[i] = results.items[i].body;
                             //accepted[i] = results.items[i].is_accepted;

                            //  if(results.items[i].is_accepted == value)
                            //  {
                            //   acceptedbody.push(results.items[i].body);
                            // }

                        }

                        exports.acceptedTrue = acceptedbody[0];

                        res.render('allanswers', {results: results, ans: ans}, function(err, result){
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

                    }, obj);
                }
              }

exports.bestanswer = function(req, res){

    if (req != "") {
        var obj = [];
        var acceptedbody = [];

        obj.push(req.param('id'));
        console.log(obj);
        var options = {
            version: 2.2
        };
        var context = new stackexchange(options);

        var ansfilter = {
            ids : obj,
            filter: '!bJjknYumlHWZ)D',
            is_accepted: 'True'
        }


context.questions.answers(ansfilter, function(err, results) {
  if (err) throw err;
  var ans = [];
  var accepted = [];
  var value = true;
  var str= [];
  var str2= [];
  for( var i=0; i<results.items.length; i++)
  {
                if(results.items[i].is_accepted == value)
                {
                  str = results.items[i].body.split("\n");
                  for(var i=0; i<str.length; i++)
                    str2.push(htmlToText.fromString(str[i]));
                }
              }

              res.render('bestanswer', {accepted: str2}, function(err, result){
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

            }, obj);
}
} 

exports.tags = function(req, res){

  if (req != "") {

        var options = {
            version: 2.2
        };
        var context = new stackexchange(options);

             var tagfilter = {
            order: 'desc',
            sort: 'popular',
            site: 'stackoverflow'
             }

            context.users.tags(tagfilter, function(err, results) {
                        if (err) throw err;

                          var count = [];
                         for( var i=0; i<results.items.length; i++)
                         {
                             count[i] = results.items[i].count;
                         }   
                          console.log(count);       
                        res.render('tags', {results: results, count: count}, function(err, result){
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
                    
                    });   
                }     
}
