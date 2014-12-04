var url = "http://api.stackexchange.com/2.2/search?order=desc&sort=activity";
var http = require("http");
var stackexchange = require('stackexchange');
var htmlToText = require('html-to-text');

exports.search = function(req, res) {

	if (req != "") {

		var options = {
			version: 2.2
		};
		var context = new stackexchange(options);

		var filter = {
			intitle: req.param("txtsearch"),
			// pagesize: 50,
			// // tagged: req.param("txtsearch"),
			// sort: 'activity',
			// order: 'asc',
            title : req.param("txtsearch")



        };

        var ansfilter = {
                       // ids: 38857,
                       title : req.param("txtsearch"),
                       filter: '!9YdnSO-*B', 
                       //title: req.param("txtsearch"),
                       // body: req.param("txtsearch")
                       site: "askubuntu"
                   }

        //Get all the questions (http://api.stackexchange.com/docs/questions)
        context.search.excerpts(ansfilter, function(err, results) {
        	if (err) throw err;

        	console.log(results);
        	res.render('results', {results: JSON.stringify(results)}, function(err, result){
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

exports.viewsearch = function(req, res){

    if (req != "") {

        var options = {
            version: 2.2
        };
        var context = new stackexchange(options);



        var ansfilter = {

            title : req.param("title"),
            filter: '!mXs8ZM6wKE'


        }

        //Get all the questions (http://api.stackexchange.com/docs/questions)
       /* context.search.excerpts(ansfilter, function(err, results) {
            if (err) throw err;

            
            var text = results.items[0].body;
            console.log(text);
            var formatted = text.replace(/[&\/\\#,$~%.'":;*<>39]/g,'');
            console.log(formatted);
           
            res.render('results', {results: results, formatted: formatted}, function(err, result){
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
}*/

context.search.excerpts(ansfilter, function(err, results) {
            if (err) throw err;
 
              var text = [];
                var text1;
                var formatted;
             for( var i=0; i<results.items.length; i++)
             {
                text[i] = JSON.stringify(results.items[i].body);
                //text1 = text[i];
                
              
                // formatted = text.replace(/[&\/\\#,$~%.'":;*<>39]/g,'');
              }
            //formatted =  text1.replace(/[&\/\\#,$~%.'":;*<>39]/g,'');
               //console.log(formatted);
              
            res.render('results', {results: results,  text: text}, function(err, result){
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
