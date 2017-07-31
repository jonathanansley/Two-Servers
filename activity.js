// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet





// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTONE = 7000;
var PORTTWO  = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("something good: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);

// Here we start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTONE);

});






// Here we create a generic function to handle requests and responses
function handleRequestTwo(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("something bad: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverTwo = http.createServer(handleRequestTwo);

// Here we start our server so that it can begin listening to client requests.
serverTwo.listen(PORTTWO, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTTWO);

});
