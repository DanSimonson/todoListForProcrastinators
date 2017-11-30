
var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

//set up template engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));
//fire controllers
todoController(app);
//listen to port
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
//app.listen(3000);
//console.log('You are listening to port 3000');