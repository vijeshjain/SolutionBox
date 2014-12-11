var http = require("http");
var stackexchange = require('stackexchange');


exports.answers = function(req, res) {

                                        if (req != "") {
                                                var options = {
                                                        version: 2.2
                                                };
                                                var context = new stackexchange(options);

                                                var filter = {
                                                        ids: 'accepted_answer_id',
                                                        pagesize: 50,
                                                        sort: 'activity',
                                                        order: 'asc',
                                                        filter: '!9YdnSK0R1'
                                                };
                                                

                                        context.answers.answers(filter, function(err, results) {
                                                if (err) throw err;

                                                //console.log(results);
                                                res.render('results', {results: JSON.stringify(results)}, function(err, result){
                                                        if(!err)
                                                        {
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
