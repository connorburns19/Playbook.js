//Note: I copied alot of the code from the week 8 lecture as you can see. So just want to clarify
// that is the source where I grabbed the skeleton for this server file.

/* server.js - Express server*/
"use strict";
const log = console.log;
log("Express server");

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/pub")));

app.get("/", (req, res) => {
  // sending a string
  //res.send('This should be the root route!')

  //sending some HTML
  res.send(
    "<h1>Welcome to FbPlaybook Sample Page. go to https://fbplaybooksample.herokuapp.com/examples.html to see the library in action.</h1>"
  );
});

// Error codes
app.get("/problem", (req, res) => {
  // You can indicate a status code to send back
  // by default it is 200, but it's up to you
  // if you want to send something
  res.status(500).send("There was a problem on the server");

  // don't send nonsense status codes like this one:
  //res.status(867).send('There was a problem on the server')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
}); // localhost development port 5000  (http://localhost:5000)
// We've bound that port to localhost to go to our express server.
// Must restart web server when you make changes to route handlers.
