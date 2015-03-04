### Live Demo: http://solutionboxdemo.mybluemix.net/

# Project Description:
- A Web based application which fetches top-rated answers using StackOverFlow API in a sorted format based on the relevance of the results for a user's query.
- Implemented real time analysis of the data using Google Charts of sorted/unsorted data and hottest technologies.
- Generated results by this application will be a set of most accurate results, thus time saved. 

### Motivation/Problem Statement:
- In today's highly advanced technological world, a problem itself comes with a solution, which somebody has experienced it before. 
- Problems can be of any kind, let's say a programming problem in Java. So, whenever a problem is encountered, the very first approach to resolve it is to find a similar problem posted on the internet Q&A websites like Stack Overflow, Quora and many more forums related to it. 
- The least preferred method is to lookup the user manual or the documentation provided by the vendor of the software product, as the document is very lengthy and not specific to the problem. 
- Thus, the time consumed to find the solution will increase as the problem need to be searched through many forums, provided accuracy of the solution found is also to be kept in mind. 
- In short, a set of concise document is required for a problem of a topic (e.g. Cloud, Big Data, Java, and Node JS) which provides only best and accurate solution from various Q&A website sources.

### Methods/procedure/Approach:
- Bulk data collection would be required from many Q&A based websites with respect to a topic. 
- Topics would be a set of keyword which can be pre-defined or can be taken at real-time from the user.
- For example, "Unable to install Hadoop on Ubuntu" is a problem statement of a user. So, now our algorithm will look up for answers related to the above problem posted online. At this point, we would store only the highest rated (up voted) answers for that specific problem from all different websites. (E.g. top 10 up voted answers from each of the websites). 
- So, if we have a look up from 5 websites than in all we would have 10 x 5 = 50 best solutions in our box.

### Results/Findings/Product:

- Finally, a brief document will be generated based on the above algorithm which will have highest accuracy and best possible solution to the problem of the user. 
- A minified version of a user manual can be generated from the above result that will serve as a Help document for most searched problems online. 
- The advantage factor would be that, the user will not have to look for solutions on different websites, as our result will provide them with a concise and top solutions from various websites. 
- Hence, this result will save time for the users who search for solutions online and need it real quick.


### Project Screenshots:



### Tools:
- NodeJS
- Express Framework
- HTML5/CSS3
- BootStrap Framework
- StackOverFlow API
- Google Charts API

### Reference/Source:
http://www.stackoverflow.com
