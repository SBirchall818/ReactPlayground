var express = require('express');

var app = express();

var port = 3010;

app.use(express.static(__dirname + '/public'));

app.listen(port, function(err) {
    console.log('listening on port ' + port);
});