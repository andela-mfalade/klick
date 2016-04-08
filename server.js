var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


var config = require('./config/appConfig');
var router = require('./app/router');

var port = config.port

app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api/v1', router);

app.listen(port, function() {
    console.log(port + " is where the magic happens..")
})

exports = module.exports = app;
