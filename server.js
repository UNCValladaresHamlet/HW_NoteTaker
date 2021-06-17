//Import Express NPM Module
const express = require('express');

//Creating express app (part of boiler plate code for Express)
//Tells node that we are creating an "express" server
const app = express();

//We use this to deploy to heroku
//process.env.port, needs this code 
//Heroku determines which port we use to run on, we don't get to choose/
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
//
app.use(express.urlencoded({ extended: true })); //This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.json()); //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.static('Develop/public')) //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
                                          //express.static(root, [options]) ,, The root argument specifies the root directory from which to serve static assets.Now, you can load the files that are in the public      directory:

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


//API ROUTES- for getting, sending, deleting data (This route GOES FIRST)
//HTML ROUTES - user lands at a certain HTML page