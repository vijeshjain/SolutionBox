var http = require("http");
var stackexchange = require('stackexchange');
var JefNode = require('json-easy-filter').JefNode;

exports.answers = function(req, res) {

                                        if (req != "") {
                                                var options = {
                                                        version: 2.2
                                                };
                                                var context = new stackexchange(options);

                                              /*  var res = new JefNode(results).filter(function(node) {
                                                     if (node.has('accepted_answer_id')) {
                                                            console.log("Before answers");
                                                            return node.value.accepted_answer_id;
                                                             }
                                                    });*/

                                                var filter = {
                                                        ids: 'accepted_answer_id',
                                                        pagesize: 50,
                                                        // tagged: req.param("txtsearch"),
                                                        sort: 'activity',
                                                        order: 'asc',
                                                        filter: '!9YdnSK0R1'
                                                };
                                                

                                        // Get all the questions (http://api.stackexchange.com/docs/questions)
                                        context.answers.answers(filter, function(err, results) {
                                                if (err) throw err;

                                                console.log(results);
                                                res.render('results', {results: JSON.stringify(results)}, function(err, result){
                                                        if(!err)
                                                        {
                                                                /*res.end(result);*/
                                                                var res = new JefNode(results).filter(function(node) {
                                                                 if (node.has('body')) {
                                                                  return  node.value.body;
                                                                         }
                                                                });
                                                                console.log(res);

                                                                
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
